import { AppError } from '../../core/AppError'

const makeDomainEventsHandler = () => {
  let handlers = {}
  let list = []

  const addToList = (aggregate) => {
    let found = !!findEvent(aggregate.id)
    if (!found) list.push(aggregate)
  }

  const dispatchEvents = (aggregate) => {
    aggregate.domainEvents.forEach((event) => dispatch(event))
  }

  const removeFromList = (aggregate) => {
    const index = list.findIndex((a) => a.equals(aggregate))
    list.splice(index, 1)
  }

  const findEvent = (id) => {
    let found = null
    for (let aggregate of list) if (aggregate.id.equals(id)) found = aggregate
    return found
  }

  const dispatchAggregateEvents = (id) => {
    let aggregate = findEvent(id)

    if (aggregate) {
      dispatchEvents(aggregate)
      aggregate.clearEvents()
      removeFromList(aggregate)
    }
  }

  const register = (eventName, callback) => {
    if (!handlers.hasOwnProperty(eventName)) {
      handlers[eventName] = []
    }
    handlers[eventName].push(callback)
  }

  const clearHandlers = () => (handlers = {})

  const dispatch = (event) => {
    const eventName = event.name

    const { HandlerNotFound } = DomainEventError
    let found = handlers[eventName]

    if (!found) {
      throw HandlerNotFound.create(
        `Nenhum event-handler encontrado com o nome ${eventName}`
      )
    }

    console.log('[Event Dispatched]:', eventName)

    if (handlers.hasOwnProperty(eventName)) {
      const _handlers = handlers[eventName]
      for (let handler of _handlers) handler(event)
    }
  }

  return {
    register,
    addToList,
    clearHandlers,
    dispatchAggregateEvents,
    getHandlers: () => handlers,
    getEvents: () => list,
  }
}

class HandlerNotFound extends AppError {
  statusCode = 400

  constructor(message, statusCode) {
    super(message, statusCode)

    Object.setPrototypeOf(this, HandlerNotFound.prototype)
  }

  create(err) {
    return new HandlerNotFound(err, this.statusCode)
  }
}

export const DomainEventError = {
  HandlerNotFound: new HandlerNotFound(),
}

export const domainEvents = makeDomainEventsHandler()

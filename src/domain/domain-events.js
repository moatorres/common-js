// import { EventEmitter } from 'events'

import { AppError } from '../core/AppError'

export const makeDomainEventsHandler = ({ handler }) => {
  return function domainEventsHandler() {
    let handlers = {}
    let eventList = []

    const getHandlers = () => handlers
    const clearHandlers = () => (handlers = {})

    const add = ({ evento, callback }) => {
      if (handlers[evento]) return
      handlers[evento] = callback
      handler.on(evento, callback)
    }

    const dispatch = ({ evento, payload }) => {
      let found = handlers[evento]
      if (!found)
        throw DomainEventError.HandlerNotFound.create(
          `Nenhum event-handler encontrado com o nome ${evento}`
        )
      handler.emit(evento, payload)
    }

    const getEventList = () => eventList

    const removeFromList = (aggregate) => {
      const index = eventList.findIndex((e) => e.equals(aggregate.id))
      eventList.splice(index, 1)
    }

    const clearEventList = () => (eventList = [])

    const register = ({ evento, payload }) => {
      let found = handlers[evento]
      if (!found)
        throw DomainEventError.HandlerNotFound.create(
          `Nenhum event-handler encontrado com o nome ${evento}`
        )

      let toAdd = { evento, payload }
      eventList.push(toAdd)
    }

    const dispatchAll = () =>
      eventList.forEach((e) => handler.emit(e.evento, e.payload))

    return {
      add,
      register,
      dispatch,
      dispatchAll,
      getEventList,
      removeFromList,
      clearEventList,
      getHandlers,
      clearHandlers,
    }
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

import pipe from '../utils/pipe'
import { makeEntity } from './entity'
import { domainEvents } from './events/domain-events'

const Aggregate = (entity) => {
  let _events = []

  const clearEvents = () => {
    _events.splice(0, _events.length)
    console.info('[Events Cleared]:', _events)
  }

  const addEvent = (event) => {
    _events.push(event)
    domainEvents.addToList(event.aggregate)
    logEventAdded(event.name)
  }

  const logEventAdded = (event) => console.info(`[Event Added]: ${event}`)

  return {
    addEvent,
    domainEvents: _events,
    clearEvents,
    ...entity,
  }
}

export const makeAggregate = (props) => pipe(makeEntity, Aggregate)(props)
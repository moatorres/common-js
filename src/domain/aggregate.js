import { pipe } from '../utils'
import { makeEntity } from './entity'
import { domainEvents } from './events/domain-events'

const Aggregate = (entity) => {
  let events = []

  function addEvent(event) {
    events.push(event)
    domainEvents.addToList(this)
    logEventAdded(event.name)
  }

  const clearEvents = () => {
    events.splice(0, events.length)
    console.info('[Events Cleared]:', events)
  }

  const logEventAdded = (event) => console.info(`[Event Added]: ${event}`)

  return {
    addEvent,
    domainEvents: events,
    clearEvents,
    ...entity,
  }
}

export const makeAggregate = (props) => pipe(makeEntity, Aggregate)(props)

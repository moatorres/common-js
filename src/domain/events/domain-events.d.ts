import { Aggregate } from '../aggregate'
import { Identifier } from '../identifier'

interface IDomainEvents {
  register: (event: string, callback: Function) => void
  addToList: (aggregate: Aggregate) => void
  clearHandlers: () => void
  dispatchAggregateEvents: (aggregateId: Identifier) => void
  getHandlers: () => IHandler[]
  getEvents: () => IEvent[]
}

interface IEvent {
  name: string
  aggregate: Aggregate
  dateTimeOccurred: Date
  aggregateId: Identifier
}

interface IHandler {
  name: string
  callback: function
}

export const domainEvents: IDomainEvents

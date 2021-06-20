import { EventEmitter } from 'events'
import { Aggregate } from './aggregate'
import { Entity } from './make-entity'
import { Identifier } from './identifier'

type IDomainEvents = () => {
  add: ({ evento, callback }: IHandler) => void
  register: ({ evento, payload }: IEvent) => void
  dispatch: ({ evento, payload }: IEvent) => void
  dispatchAll: () => void
  getEventList: () => IEvent[]
  removeFromList: (aggregate: Entity | Aggregate) => void
  clearEventList: () => void
  getHandlers: () => object
  clearHandlers: () => void
}

interface IHandler {
  evento: string
  callback: Function
}

interface IPayload {
  id: Identifier | string
  body?: object | string | number
  timestamp?: Date
}

interface IEvent {
  evento: string
  payload: IPayload
}

interface IEventHandler {
  handler: EventEmitter
}

export function makeDomainEventsHandler({}: IEventHandler): IDomainEvents

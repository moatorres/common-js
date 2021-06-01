import { EventEmitter } from 'events'

type DomainEvents = () => {
  add: ({ evento, callback }: IHandler) => void
  register: (nome: string, payload: Payload) => void
  dispatch: ({ evento, payload }: IEvent) => {}
  dispatchAll: () => void
  getEventList: () => IEvent[]
  clearEventList: () => void
  getHandlers: () => object
  clearHandlers: () => void
}

interface IHandler {
  evento: string
  callback: Function
}

type Payload = object | string | number | Date

interface IEvent {
  evento: string
  payload: Payload
  date?: Date
}

export function makeDomainEvents({
  handler,
}: {
  handler: EventEmitter
}): DomainEvents

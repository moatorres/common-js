import { domainEvents } from './domain-events'
import { makeAggregate } from '../aggregate'
import {
  AfterUserCreated,
  UserCreatedEvent,
  eventHandlerFoiChamado,
} from './domain-events.spec.setup'

let dbEntry = makeAggregate({ props: { nome: 'Moka' } })

beforeEach(() => {
  // subscriber registers an 'UserCreatedEvent'
  AfterUserCreated()
})

afterEach(() => {
  domainEvents.clearHandlers()
})

describe('DomainEvents', () => {
  describe('.register()', () => {
    it('Should be defined', () => {
      expect(domainEvents.register).toBeDefined()
    })

    it('Should successfully register event-handlers', () => {
      expect(domainEvents.getHandlers()['UserCreatedEvent']).toBeDefined()
    })
  })

  describe('.addToList()', () => {
    it('Should be defined', () => {
      expect(domainEvents.addToList).toBeDefined()
    })

    it('Should successfully receive events added by aggregates', () => {
      // new aggregate event
      dbEntry.addEvent(UserCreatedEvent(dbEntry))

      expect(domainEvents.getEvents().length).toEqual(1)
    })
  })

  describe('.clearHandlers()', () => {
    it('Should be defined', () => {
      expect(domainEvents.clearHandlers).toBeDefined()
    })

    it('Should clear all event handlers', () => {
      domainEvents.clearHandlers()

      expect(domainEvents.getHandlers()['UserCreatedEvent']).not.toBeDefined()
    })
  })

  describe('.dispatchAggregateEvents()', () => {
    it('Should be defined', () => {
      expect(domainEvents.dispatchAggregateEvents).toBeDefined()
    })

    it("Should successfully dispatch aggregate's events", () => {
      domainEvents.dispatchAggregateEvents(dbEntry.id)

      expect(eventHandlerFoiChamado).toHaveBeenCalled()
      expect(eventHandlerFoiChamado.mock.calls.length).toEqual(1)
    })
  })
})

import { EventEmitter } from 'events'
import { makeDomainEventsHandler } from './domain-events'

const handler = new EventEmitter()
const domainEvents = makeDomainEventsHandler({ handler })
const userEvents = domainEvents()
const handlerExample = {
  evento: 'getUser',
  callback: (payload) => console.log(payload),
}
const eventExample = {
  evento: 'getUser',
  payload: { id: '123123123', timestamp: new Date() },
}

afterEach(() => {
  userEvents.clearEventList()
  userEvents.clearHandlers()
})

describe('DomainEvents', () => {
  describe('.add()', () => {
    it('Should be defined', () => {
      expect(userEvents.add).toBeDefined()
    })

    it('Should add a new event handler', () => {
      userEvents.add(handlerExample)
      expect(userEvents.getHandlers()['getUser']).toBeDefined()
    })

    it('Should NOT add a handler with an existing event-handler name', () => {
      userEvents.add(handlerExample)

      let handlers = userEvents.getHandlers()
      let key
      let arr = []
      for (key in handlers) {
        arr.push(key)
      }

      expect(arr.length).toEqual(1)
    })
  })

  describe('.getHandlers()', () => {
    it('Should be defined', () => {
      expect(userEvents.getHandlers).toBeDefined()
    })

    it('Should return an empty object if no handler is found', () => {
      userEvents.clearHandlers()
      expect(userEvents.getHandlers()).toEqual({})
    })
  })

  describe('.clearHandlers()', () => {
    it('Should be defined', () => {
      expect(userEvents.clearHandlers).toBeDefined()
    })

    it('Should remove added event handlers', () => {
      userEvents.add(handlerExample)

      let handlers = userEvents.getHandlers()
      expect(handlers['getUser']).toBeDefined()

      userEvents.clearHandlers()
      expect(userEvents.getHandlers()).toEqual({})
    })
  })

  describe('.dispatch()', () => {
    it('Should be defined', () => {
      expect(userEvents.dispatch).toBeDefined()
    })

    it('Should throw if a handler is NOT found', () => {
      expect(() => userEvents.dispatch(eventExample)).toThrowError()
    })

    it('Should emit the respective dispatched event', () => {
      // pass a mock fn as the event callback so we can assert that it is called
      let chamou = jest.fn((payload) => payload)

      userEvents.add({
        evento: 'getUser',
        callback: (payload) => chamou(payload),
      })

      userEvents.dispatch(eventExample)

      expect(chamou.mock.calls.length).toEqual(1)
    })
  })

  describe('.register()', () => {
    it('Should be defined', () => {
      expect(userEvents.register).toBeDefined()
    })

    it('Should add the event name and its payload to the event list', () => {
      userEvents.add(handlerExample)
      userEvents.register(eventExample)
      let lista = userEvents.getEventList()

      expect(lista.length).toEqual(1)
    })
  })

  describe('.dispatchAll()', () => {
    it('Should be defined', () => {
      expect(userEvents.dispatchAll).toBeDefined()
    })

    it('Should dispatch all events in the current event list', () => {
      // pass a mock fn as the event callback so we can assert that it is called
      let chamou = jest.fn((payload) => payload)

      userEvents.add({
        evento: 'getUser',
        callback: (payload) => chamou(payload),
      })

      userEvents.register(eventExample)
      userEvents.register(eventExample)
      userEvents.dispatchAll()
      expect(chamou.mock.calls.length).toEqual(2)
    })
  })

  describe('.removeFromList()', () => {
    it('Should be defined', () => {
      expect(userEvents.removeFromList).toBeDefined()
    })

    it('Should remove events from the current list based on its "id" AND equality', () => {
      expect(userEvents.removeFromList).toBeDefined()
    })
  })

  describe('.clearEventList()', () => {
    it('Should be defined', () => {
      expect(userEvents.clearEventList).toBeDefined()
    })

    it('Should remove all events from the event list', () => {
      userEvents.add(handlerExample)
      userEvents.register(eventExample)
      userEvents.register(eventExample)
      userEvents.register(eventExample)

      let lista = userEvents.getEventList()
      expect(lista.length).toEqual(3)

      userEvents.clearEventList()
      lista = userEvents.getEventList()
      expect(lista.length).toEqual(0)
    })
  })
})

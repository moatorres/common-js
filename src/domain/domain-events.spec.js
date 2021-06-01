import { EventEmitter } from 'events'
import { makeDomainEvents } from './domain-events'

let handler = new EventEmitter()
const domainEvents = makeDomainEvents({ handler })
const userEvents = domainEvents()

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
      userEvents.add({
        evento: 'getUser',
        callback: (payload) => payload,
      })
      expect(userEvents.getHandlers()['getUser']).toBeDefined()
    })

    it('Should NOT add handlers with existing names', () => {
      userEvents.add({
        evento: 'getUser',
        callback: (payload) => payload,
      })
      userEvents.add({
        evento: 'getUser',
        callback: (payload) => payload,
      })
      userEvents.add({
        evento: 'getUser',
        callback: (payload) => payload,
      })

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
      userEvents.add({ evento: 'novoMembro', callback: (payload) => payload })

      let handlers = userEvents.getHandlers()
      expect(handlers['novoMembro']).toBeDefined()

      userEvents.clearHandlers()
      expect(userEvents.getHandlers()).toEqual({})
    })
  })

  describe('.dispatch()', () => {
    it('Should be defined', () => {
      expect(userEvents.dispatch).toBeDefined()
    })

    it('Should throw if a handler is NOT found', () => {
      expect(() =>
        userEvents.dispatch({ evento: 'getUser', payload: '123' })
      ).toThrowError()
    })

    it('Should emit the respective dispatched event', () => {
      let chamou = jest.fn((payload) => payload)
      userEvents.add({
        evento: 'getUser',
        callback: (payload) => chamou(payload),
      })

      userEvents.dispatch({ evento: 'getUser', payload: '123' })
      expect(chamou.mockReturnValue('123'))
      expect(chamou.mock.calls.length).toEqual(1)
    })
  })

  describe('.register()', () => {
    it('Should be defined', () => {
      expect(userEvents.register).toBeDefined()
    })

    it('Should add the event name and its payload to the event list', () => {
      userEvents.add({ evento: 'getUser', callback: (payload) => payload })
      userEvents.register('getUser', '123123123')
      let lista = userEvents.getEventList()

      expect(lista.length).toEqual(1)
    })
  })

  describe('.dispatchAll()', () => {
    it('Should be defined', () => {
      expect(userEvents.dispatchAll).toBeDefined()
    })

    it('Should dispatch all events in the current event list', () => {
      let chamou = jest.fn((payload) => payload)

      userEvents.add({
        evento: 'getUser',
        callback: (payload) => chamou(payload),
      })

      userEvents.register('getUser', '123123123')
      userEvents.register('getUser', '123123123')

      userEvents.dispatchAll()
      expect(chamou.mock.calls.length).toEqual(2)
    })
  })

  describe('.clearEventList()', () => {
    it('Should be defined', () => {
      expect(userEvents.clearEventList).toBeDefined()
    })

    it('Should remove all events from the event list', () => {
      userEvents.add({ evento: 'getUser', callback: (payload) => payload })
      userEvents.register('getUser', '123123123')
      userEvents.register('getUser', '123123123')
      userEvents.register('getUser', '123123123')

      let lista = userEvents.getEventList()
      expect(lista.length).toEqual(3)

      userEvents.clearEventList()
      lista = userEvents.getEventList()
      expect(lista.length).toEqual(0)
    })
  })
})

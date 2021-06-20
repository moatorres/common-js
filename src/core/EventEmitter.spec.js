import { EventEmitter } from './EventEmitter'

let handler = new EventEmitter()
let callbackExample = (payload) => payload

beforeEach(() => {
  handler = new EventEmitter()
})

describe('EventEmitter Class', () => {
  describe('.adicionar()', () => {
    it('Should be defined', () => {
      expect(handler.adicionar).toBeDefined()
    })

    it('Should successfully add an event-listener', () => {
      handler.adicionar('getUser', () => console.log('getUser'))
      expect(handler.qtdOuvintes('getUser')).toEqual(1)
    })
  })

  describe('.on()', () => {
    it('Should be defined', () => {
      expect(handler.on).toBeDefined()
    })

    it('Should successfully add an event-listener', () => {
      handler.on('getUser', () => console.log('getUser'))
      handler.on('getUser', () => console.log('getUser'))
      expect(handler.qtdOuvintes('getUser')).toEqual(2)
    })
  })

  describe('.quando()', () => {
    it('Should be defined', () => {
      expect(handler.quando).toBeDefined()
    })

    it('Should successfully add an event-listener', () => {
      handler.quando('getUser', () => console.log('getUser'))
      handler.quando('getUser', () => console.log('getUser'))
      handler.quando('getUser', () => console.log('getUser'))
      expect(handler.qtdOuvintes('getUser')).toEqual(3)
    })
  })

  describe('.remover()', () => {
    it('Should be defined', () => {
      expect(handler.remover).toBeDefined()
    })

    it('Should successfully remove an event-listener', () => {
      handler.on('getUser', callbackExample)
      expect(handler.qtdOuvintes('getUser')).toEqual(1)

      handler.remover('getUser', callbackExample)
      expect(handler.qtdOuvintes('getUser')).toEqual(0)
    })
  })

  describe('.off()', () => {
    it('Should be defined', () => {
      expect(handler.off).toBeDefined()
    })

    it('Should successfully remove an event-listener', () => {
      handler.on('getUser', callbackExample)
      expect(handler.qtdOuvintes('getUser')).toEqual(1)

      handler.off('getUser', callbackExample)
      expect(handler.qtdOuvintes('getUser')).toEqual(0)
    })
  })

  describe('.emitir()', () => {
    it('Should be defined', () => {
      expect(handler.emitir).toBeDefined()
    })
  })

  describe('.once()', () => {
    it('Should be defined', () => {
      expect(handler.once).toBeDefined()
    })

    it('Should trigger an event only once', () => {
      let chamou = jest.fn()

      handler.once('newUser', chamou)
      handler.emit('newUser', '123')
      handler.emit('newUser', '123')
      handler.emit('newUser', '123')
      expect(chamou.mock.calls.length).toEqual(1)
    })
  })

  describe('.qtdOuvintes()', () => {
    it('Should be defined', () => {
      expect(handler.qtdOuvintes).toBeDefined()
    })

    it('Should return the length (number) of "ouvintes" (listeners) based on the event\'s name', () => {
      expect(handler.qtdOuvintes('getUser')).toEqual(0)
    })
  })

  describe('.rawOuvintes()', () => {
    it('Should be defined', () => {
      expect(handler.rawOuvintes).toBeDefined()
    })
  })
})

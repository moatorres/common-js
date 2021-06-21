import { makeAggregate } from './aggregate'

let aggregate = makeAggregate({ props: { nome: 'Moka' } })
let anotherAgreggate = makeAggregate({ props: { nome: 'Moka' } })
beforeEach(() => {})

afterEach(() => {
  aggregate.clearEvents()
})

describe('Aggregate', () => {
  describe('.id', () => {
    it('Should be defined', () => {
      expect(aggregate.id).toBeDefined()
    })

    it('Should be a valid instance of Identifier', () => {
      expect(aggregate.id.equals).toBeDefined()
      expect(aggregate.id.toString).toBeDefined()
      expect(aggregate.id.toValue).toBeDefined()
    })
  })

  describe('.props', () => {
    it('Should be defined', () => {
      expect(aggregate.props).toBeDefined()
    })

    it('Should be a valid object', () => {
      expect(typeof aggregate.props === 'object').toBeDefined()
    })
  })

  describe('.addEvent()', () => {
    it('Should be defined', () => {
      expect(aggregate.addEvent).toBeDefined()
    })

    it('Should successfully add an event', () => {
      aggregate.addEvent({
        name: 'NewUser',
        aggregate: aggregate,
        aggregateId: aggregate.id,
        dateTimeOccurred: new Date(),
      })

      expect(aggregate.domainEvents.length).toEqual[1]
    })
  })

  describe('.domainEvents', () => {
    it('Should be defined', () => {
      expect(aggregate.domainEvents).toBeDefined()
    })

    it('Should return an empty array if no event is found', () => {
      expect(aggregate.domainEvents).toEqual([])
    })

    it('Should return an array of events', () => {
      aggregate.addEvent({
        name: 'NewUser',
        aggregate: aggregate,
        aggregateId: aggregate.id,
        dateTimeOccurred: new Date(),
      })

      expect(aggregate.domainEvents.length).toEqual(1)
    })
  })

  describe('.clearEvents', () => {
    it('Should be defined', () => {
      expect(aggregate.clearEvents).toBeDefined()
    })

    it('Should remove all events of an aggregate', () => {
      aggregate.clearEvents()

      expect(aggregate.domainEvents.length).toEqual(0)
    })
  })

  describe('.equals()', () => {
    it('Should be defined', () => {
      expect(aggregate.equals).toBeDefined()
    })

    it('Should return "true" if the passed "object.id" is equal to its "id"', () => {
      expect(aggregate.equals(aggregate)).toBeTrue()
    })

    it('Should return "false" if the passed "object.id" is NOT equal to its "id"', () => {
      expect(anotherAgreggate.equals(aggregate)).toBeFalse()
    })
  })
})

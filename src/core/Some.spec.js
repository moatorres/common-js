import { Some, None, OptionType } from './Some'

let some, none, resultSome, chamouSome, resultNone, chamouNone, matcher

function dividir(a, b) {
  if (b === 0) return None()
  else return Some(a / b)
}

beforeEach(() => {
  chamouSome = jest.fn()
  chamouNone = jest.fn()
  some = Some(1)
  none = None()
  resultSome = dividir(4, 1)
  resultNone = dividir(4, 0)
  matcher = (r) =>
    r.match({
      some: chamouSome,
      none: chamouNone,
    })
})

describe('Some', () => {
  describe('.type', () => {
    it('Should be defined', () => {
      expect(some.type).toBeDefined()
    })

    it('Should return a Symbol(:some)', () => {
      expect(some.type).toEqual(OptionType.Some)
    })
  })

  describe('.isSome()', () => {
    it('Should be defined', () => {
      expect(some.isSome).toBeDefined()
    })

    it('Should return "true"', () => {
      expect(some.isSome()).toBeTrue()
    })
  })

  describe('.isNone()', () => {
    it('Should be defined', () => {
      expect(some.isNone).toBeDefined()
    })

    it('Should return "false"', () => {
      expect(some.isNone()).toBeFalse()
    })
  })

  describe('.match()', () => {
    it('Should be defined', () => {
      expect(some.match).toBeDefined()
    })

    it('Should execute the provided "some" method', () => {
      matcher(resultSome)
      expect(chamouSome).toHaveBeenCalled()
      expect(chamouSome).toHaveBeenCalledTimes(1)
    })
  })

  describe('.map()', () => {
    it('Should be defined', () => {
      expect(some.map).toBeDefined()
    })

    it('Should return a "Some" type object', () => {
      let res = some.map((v) => v * 2)
      expect(res.type).toEqual(OptionType.Some)
    })

    it('Should execute the mapped function', () => {
      some.map(chamouSome)
      expect(chamouSome).toHaveBeenCalled()
      expect(chamouSome).toHaveBeenCalledTimes(1)

      let res = some.map((v) => v * 200).unwrap()
      expect(res).toEqual(200)
    })
  })

  describe('.andThen()', () => {
    it('Should be defined', () => {
      expect(some.andThen).toBeDefined()
    })

    it('Should execute the provided function', () => {
      some.andThen(chamouSome)
      expect(chamouSome).toHaveBeenCalled()
      expect(chamouSome).toHaveBeenCalledTimes(1)
    })
  })

  describe('.and()', () => {
    it('Should be defined', () => {
      expect(some.and).toBeDefined()
    })

    it('Should return the provided value', () => {
      some.and(chamouSome())
      expect(chamouSome).toHaveBeenCalled()
      expect(chamouSome).toHaveBeenCalledTimes(1)

      let sayHello = some.and('Hello')
      expect(sayHello).toEqual('Hello')
    })
  })

  describe('.unwrapOr()', () => {
    it('Should be defined', () => {
      expect(some.unwrapOr).toBeDefined()
    })

    it('Should return an unwrapped value', () => {
      let res = some.unwrapOr()
      expect(res).toEqual(1)
    })
  })

  describe('.unwrap()', () => {
    it('Should be defined', () => {
      expect(some.unwrap).toBeDefined()
    })

    it('Should return the unwrapped value', () => {
      let res = some.unwrap()
      expect(res).toEqual(1)
    })
  })

  describe('.or()', () => {
    it('Should be defined', () => {
      expect(some.or).toBeDefined()
    })

    it('Should return a "Some" type object', () => {
      let res = some.or()
      expect(res.type).toEqual(OptionType.Some)
      let ress = some.or().and(33)
      expect(ress).toEqual(33)
    })
  })
})

describe('None', () => {
  describe('.type', () => {
    it('Should be defined', () => {
      expect(none.type).toBeDefined()
    })

    it('Should return a Symbol(:none)', () => {
      expect(none.type).toEqual(OptionType.None)
    })
  })

  describe('.isSome()', () => {
    it('Should be defined', () => {
      expect(none.isSome).toBeDefined()
    })

    it('Should return "false"', () => {
      expect(none.isSome()).toBeFalse()
    })
  })

  describe('.isNone()', () => {
    it('Should be defined', () => {
      expect(none.isNone).toBeDefined()
    })

    it('Should return "true"', () => {
      expect(none.isNone()).toBeTrue()
    })
  })

  describe('.match()', () => {
    it('Should be defined', () => {
      expect(none.match).toBeDefined()
    })

    it('Should execute the provided "none" method', () => {
      matcher(resultNone)
      expect(chamouNone).toHaveBeenCalled()
      expect(chamouNone).toHaveBeenCalledTimes(1)
    })
  })

  describe('.map()', () => {
    it('Should be defined', () => {
      expect(none.map).toBeDefined()
    })

    it('Should return another None type object', () => {
      let res = none.map()
      expect(res.type).toEqual(OptionType.None)
    })
  })

  describe('.andThen()', () => {
    it('Should be defined', () => {
      expect(none.andThen).toBeDefined()
    })

    it('Should return another None type object', () => {
      let res = none.andThen()
      expect(res.type).toEqual(OptionType.None)
    })
  })

  describe('.and()', () => {
    it('Should be defined', () => {
      expect(none.and).toBeDefined()
    })

    it('Should return another None type object', () => {
      let res = none.and(33)
      expect(res.type).toEqual(OptionType.None)
    })
  })

  describe('.unwrapOr()', () => {
    it('Should be defined', () => {
      expect(none.unwrapOr).toBeDefined()
    })

    it('Should not allow null or undefined values', () => {
      expect(() => none.unwrapOr()).toThrowError()
      expect(() => none.unwrapOr(null)).toThrowError()
      expect(() => none.unwrapOr(undefined)).toThrowError()

      expect(() => none.unwrapOr('')).not.toThrowError()
      expect(() => none.unwrapOr(0)).not.toThrowError()
      expect(() => none.unwrapOr(false)).not.toThrowError()
      expect(() => none.unwrapOr('null')).not.toThrowError()
      expect(() => none.unwrapOr('undefined')).not.toThrowError()
    })

    it('Should return another None type object', () => {
      let res = none.and(33)
      expect(res.type).toEqual(OptionType.None)
    })
  })

  describe('.unwrap()', () => {
    it('Should be defined', () => {
      expect(none.unwrap).toBeDefined()
    })

    it('Should throw if called from a None object type', () => {
      expect(() => none.unwrap()).toThrow(ReferenceError)
    })
  })

  describe('.or()', () => {
    it('Should be defined', () => {
      expect(none.or).toBeDefined()
    })

    it('Should return the provided value', () => {
      let res = none.or(1)
      expect(res).toEqual(1)

      none.or(chamouNone())
      expect(chamouNone).toHaveBeenCalled()
      expect(chamouNone).toHaveBeenCalledTimes(1)
    })
  })
})

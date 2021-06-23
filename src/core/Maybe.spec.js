import { Maybe } from './Maybe'

describe('Maybe', () => {
  it('should handle a value', () => {
    const maybe = Maybe.just('test')
    expect(maybe.getOrElse('')).toBe('test')
  })

  it('should handle an undefined value', () => {
    const maybe = Maybe.fromValue(undefined)
    expect(maybe.getOrElse('test')).toBe('test')
  })

  it('should a false value', () => {
    const maybe = Maybe.fromValue(false)
    expect(maybe.getOrElse(true)).toBe(false)
  })

  it('should handle a string value', () => {
    const maybe = Maybe.fromValue('test')
    expect(maybe.getOrElse('')).toBe('test')
  })

  it('should handle an empty string value', () => {
    const maybe = Maybe.fromValue('')
    expect(maybe.getOrElse('test')).toBe('')
  })

  it('should return a default value with a different type', () => {
    const maybe = Maybe.fromValue(null)
    expect(maybe.getOrElse(null)).toBe(null)
  })

  it('should handle a null value', () => {
    const maybe = Maybe.fromValue(null)
    expect(maybe.getOrElse('test')).toBe('test')
  })

  it('should handle a numeric value', () => {
    const maybe = Maybe.fromValue(42)
    expect(maybe.getOrElse(0)).toBe(42)
  })

  it('should handle the zero value as valid', () => {
    const maybe = Maybe.fromValue(0)
    expect(maybe.getOrElse(1)).toBe(0)
  })

  it('should tap a value', () => {
    const maybe = Maybe.fromValue('value')
    let actual = false

    maybe.tap(() => {
      actual = true
    })

    expect(actual).toBe(true)
  })

  it('should not tap a value', () => {
    const maybe = Maybe.nothing()
    let actual = false

    maybe.tap(() => {
      actual = true
    })

    expect(actual).toBe(false)
  })

  it('should throw an error if the value is not valid', () => {
    expect(() => {
      Maybe.just(null)
    }).toThrowError()
  })

  it('should handle a callback as a default value', () => {
    const mock = jest.fn()
    const maybe = Maybe.fromValue(null)
    maybe.getOrExecute(mock)
    expect(mock).not.toHaveBeenCalled()
  })

  it('should check if it has a value', () => {
    const maybe = Maybe.fromValue('hello')
    expect(maybe.has()).toBe(true)
  })

  it('should check if it does not have a value', () => {
    const maybe = Maybe.fromValue(null)
    expect(maybe.has()).toBe(false)
  })

  it('should handle nothing value', () => {
    const maybe = Maybe.nothing()
    expect(maybe.getOrElse('test')).toBe('test')
  })

  it('should get or throw', () => {
    const maybe = Maybe.nothing()
    expect(() => {
      maybe.getOrThrow(new Error('foo'))
    }).toThrowError('foo')
  })

  it('should be able to map existing values', () => {
    const maybeMap = Maybe.just({ a: 'a' })
    expect(maybeMap.map((e) => e.a).getOrElse('b')).toBe('a')
  })

  it('should be able to map non existing values', () => {
    const maybeMap = Maybe.just({ foo: Maybe.nothing() })
    expect(
      maybeMap
        .getOrExecute(() => {
          throw new Error()
        })
        .foo.map((x) => x.bar)
    ).toEqual(Maybe.nothing())
  })

  it('should be able to flat map existing values', () => {
    const maybeMap = Maybe.fromValue({ foo: Maybe.just({ bar: 'qux' }) })
    expect(maybeMap.flatMap((x) => x.foo).map((x) => x.bar)).toEqual(
      Maybe.just('qux')
    )
  })

  it('should be able to flat map non existing values', () => {
    const maybeMap = Maybe.nothing()
    expect(maybeMap.flatMap((x) => x.foo)).toEqual(Maybe.nothing())
  })
})

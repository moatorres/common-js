import and from './and'
import isNumber from './is-number'
import isString from './is-string'

describe('and()', () => {
  it('Should be defined', () => {
    expect(and).toBeDefined()
  })

  it('Should allow us to perform a logical AND comparison (&&) between two values', () => {
    let num = 1
    let res = and(isFinite(num), isNumber(num))
    expect(res).toBeTrue()
  })

  it('Should return "true" if both arguments are "true", othwerwise "false"', () => {
    expect(and(true, true)).toBeTrue()
    expect(and(true, false)).toBeFalse()
    expect(and(false, true)).toBeFalse()
    expect(and(false, false)).toBeFalse()
  })

  describe('.predicate()', () => {
    it('Should be defined', () => {
      expect(and.predicate).toBeDefined()
    })

    it('Should allow us compose a function that performs a logical AND comparison between two predicates', () => {
      let isStringNaN = and.predicate(isString, isNaN)
      let res = isStringNaN('hey')
      expect(res).toBeTrue()
    })
  })

  describe('.all()', () => {
    it('Should be defined', () => {
      expect(and.all).toBeDefined()
    })

    it('Should allow us create a function that performs a logical AND comparison between N number of predicates', () => {
      const isGreaterThan3 = (v) => v > 3
      const isStringFour = (v) => String(v) === '4'

      let isFour = and.all(isNumber, isGreaterThan3, isStringFour)
      expect(isFour(4)).toBeTrue()
      expect(isFour('4')).toBeTrue()
      expect(isFour(2 + 2)).toBeTrue()
      expect(isFour('four')).toBeFalse()
      expect(isFour(5)).toBeFalse()
      expect(isFour('five')).toBeFalse()
    })
  })
})

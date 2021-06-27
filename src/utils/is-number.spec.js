import isNumber from './is-number'

const divide = (a, b) => a / b

describe('isNumber()', () => {
  it('Should be defined', () => {
    expect(isNumber).toBeDefined()
  })

  it('Should return "true" if receives a number', () => {
    expect(isNumber(-1)).toBeTrue()
    expect(isNumber(0)).toBeTrue()
    expect(isNumber(1)).toBeTrue()
    expect(isNumber(1 + 1)).toBeTrue()
    expect(isNumber(Number('1'))).toBeTrue()
    expect(isNumber(Number.MAX_SAFE_INTEGER)).toBeTrue()
    expect(isNumber(divide(4, 1))).toBeTrue()
    expect(isNumber('')).toBeFalse()
    expect(isNumber('1')).toBeFalse()
    expect(isNumber(true)).toBeFalse()
    expect(isNumber(false)).toBeFalse()
  })
})

import isNumberZero from './is-number-zero'

describe('isNumberZero()', () => {
  it('Should ONLY return "true" if the value is "0"', () => {
    expect(isNumberZero(0)).toBeTrue()
  })

  it('Should return "false" if the value is a "0" string', () => {
    expect(isNumberZero('0')).toBeFalse()
  })

  it('Should return "false" if the value is undefined', () => {
    expect(isNumberZero(undefined)).toBeFalse()
  })

  it('Should return "false" if the value is null', () => {
    expect(isNumberZero(null)).toBeFalse()
  })

  it('Should return "false" if the value is not a number', () => {
    expect(isNumberZero({})).toBeFalse()
    expect(isNumberZero([])).toBeFalse()
    expect(isNumberZero([0])).toBeFalse()
    expect(isNumberZero('')).toBeFalse()
    expect(isNumberZero({ number: 0 })).toBeFalse()
  })
})

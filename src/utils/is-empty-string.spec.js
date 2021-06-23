import isEmptyString from './is-empty-string'

describe('isEmptyString()', () => {
  it('Should return "true" if an empty string is passed', () => {
    expect(isEmptyString('')).toBeTrue()
  })

  it('Should return "false" if no value is passed', () => {
    expect(isEmptyString()).toBeFalse()
  })

  it('Should return "false" if the value is undefined', () => {
    expect(isEmptyString(undefined)).toBeFalse()
  })

  it('Should return "false" if the value is null', () => {
    expect(isEmptyString(null)).toBeFalse()
  })

  it('Should return "false" if the value is not a string', () => {
    expect(isEmptyString({})).toBeFalse()
    expect(isEmptyString({ string: '' })).toBeFalse()
    expect(isEmptyString([])).toBeFalse()
    expect(isEmptyString([{}])).toBeFalse()
    expect(isEmptyString([{ string: '' }])).toBeFalse()
  })
})

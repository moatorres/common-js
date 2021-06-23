import isNullOrUndefined from './is-null-or-undefined'

describe('isNullOrUndefined()', () => {
  it('Should return "true" value is null or undefined', () => {
    expect(isNullOrUndefined()).toBeTrue()
    expect(isNullOrUndefined(null)).toBeTrue()
    expect(isNullOrUndefined(undefined)).toBeTrue()
  })

  it('Should return "false" if the value is not null or undefined', () => {
    expect(isNullOrUndefined(0)).toBeFalse()
    expect(isNullOrUndefined('')).toBeFalse()
    expect(isNullOrUndefined(false)).toBeFalse()
    expect(isNullOrUndefined('null')).toBeFalse()
    expect(isNullOrUndefined('undefined')).toBeFalse()
    expect(isNullOrUndefined({})).toBeFalse()
    expect(isNullOrUndefined([])).toBeFalse()
    expect(isNullOrUndefined([null])).toBeFalse()
    expect(isNullOrUndefined([{ undefined: null }])).toBeFalse()
  })
})

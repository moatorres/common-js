import isNotNullOrUndefined from './is-not-null-or-undefined'

describe('isNotNullOrUndefined()', () => {
  it('Should only return "true" if the value is NOT null or undefined', () => {
    expect(isNotNullOrUndefined(0)).toBeTrue()
    expect(isNotNullOrUndefined('')).toBeTrue()
    expect(isNotNullOrUndefined(false)).toBeTrue()
    expect(isNotNullOrUndefined('null')).toBeTrue()
    expect(isNotNullOrUndefined('undefined')).toBeTrue()
    expect(isNotNullOrUndefined({})).toBeTrue()
    expect(isNotNullOrUndefined([])).toBeTrue()
    expect(isNotNullOrUndefined([null])).toBeTrue()
    expect(isNotNullOrUndefined([{ undefined: null }])).toBeTrue()
  })

  it('Should return "false" the value IS null or undefined', () => {
    let isso
    expect(isNotNullOrUndefined()).toBeFalse()
    expect(isNotNullOrUndefined(isso)).toBeFalse()
    expect(isNotNullOrUndefined(null)).toBeFalse()
    expect(isNotNullOrUndefined(undefined)).toBeFalse()
  })
})

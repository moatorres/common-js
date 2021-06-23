import isNull from './is-null'

describe('isNull()', () => {
  it('Should return "true" if the value is null', () => {
    expect(isNull(null)).toBeTrue()
  })

  it('Should return "false" if the value is undefined', () => {
    expect(isNull()).toBeFalse()
    expect(isNull(undefined)).toBeFalse()
  })

  it('Should return "false" if the value is not null', () => {
    expect(isNull('')).toBeFalse()
    expect(isNull({})).toBeFalse()
    expect(isNull([])).toBeFalse()
    expect(isNull(0)).toBeFalse()
    expect(isNull(false)).toBeFalse()
    expect(isNull([null])).toBeFalse()
    expect(isNull({ value: null })).toBeFalse()
  })
})

import notNullOrUndefined from './not-null-or-undefined'

describe('notNullOrUndefined()', () => {
  it('Should only return "true" if the value is NOT null or undefined', () => {
    expect(notNullOrUndefined(0)).toBeTrue()
    expect(notNullOrUndefined('')).toBeTrue()
    expect(notNullOrUndefined(false)).toBeTrue()
    expect(notNullOrUndefined('null')).toBeTrue()
    expect(notNullOrUndefined('undefined')).toBeTrue()
    expect(notNullOrUndefined({})).toBeTrue()
    expect(notNullOrUndefined([])).toBeTrue()
    expect(notNullOrUndefined([null])).toBeTrue()
    expect(notNullOrUndefined([{ undefined: null }])).toBeTrue()
  })

  it('Should return "false" the value IS null or undefined', () => {
    let isso
    expect(notNullOrUndefined()).toBeFalse()
    expect(notNullOrUndefined(isso)).toBeFalse()
    expect(notNullOrUndefined(null)).toBeFalse()
    expect(notNullOrUndefined(undefined)).toBeFalse()
  })
})

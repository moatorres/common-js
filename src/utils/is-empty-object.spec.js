import isEmptyObject from './is-empty-object'

describe('isEmptyObject()', () => {
  it('Should be defined', () => {
    expect(isEmptyObject).toBeDefined()
  })

  it('Should return "true" if receives an empty object', () => {
    let oops
    let res = isEmptyObject('')

    expect(isEmptyObject({})).toBeTrue()
    expect(isEmptyObject({ name: oops })).toBeFalse()
    expect(isEmptyObject(false)).toBeFalse()
    expect(isEmptyObject(true)).toBeFalse()
    expect(isEmptyObject('')).toBeFalse()
    expect(isEmptyObject(0)).toBeFalse()
    expect(isEmptyObject([])).toBeFalse()
    expect(isEmptyObject([{}])).toBeFalse()
    expect(isEmptyObject({ 0: 0 })).toBeFalse()
  })
})

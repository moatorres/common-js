import isEmptyArray from './is-empty-array'

describe('isEmptyArray()', () => {
  it('Should be defined', () => {
    expect(isEmptyArray).toBeDefined()
  })

  it('Should return "true" if receives an array', () => {
    let arr = []
    expect(isEmptyArray(arr)).toBeTrue()
    expect(isEmptyArray([])).toBeTrue()
    expect(isEmptyArray({})).toBeFalse()
    expect(isEmptyArray([1, 2, 3])).toBeFalse()
    expect(isEmptyArray([{}])).toBeFalse()
    expect(isEmptyArray([''])).toBeFalse()
    expect(isEmptyArray({ emails: [] })).toBeFalse()
  })
})

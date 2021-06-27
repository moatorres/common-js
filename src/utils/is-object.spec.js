import isObject from './is-object'

describe('isObject()', () => {
  it('Should be defined', () => {
    expect(isObject).toBeDefined()
  })

  it('Should return "true" if value is an object', () => {
    let obj = { fun: () => {} }
    expect(isObject(obj)).toBeTrue()
    expect(isObject({})).toBeTrue()
    expect(isObject({ nome: 'John Doe' })).toBeTrue()
    expect(isObject({ 0: undefined })).toBeTrue()
    expect(isObject(obj.fun)).toBeFalse()
    expect(isObject([])).toBeFalse()
    expect(isObject('')).toBeFalse()
    expect(isObject(false)).toBeFalse()
    expect(isObject(true)).toBeFalse()
    expect(isObject([{ nome: 'John Doe' }])).toBeFalse()
  })
})

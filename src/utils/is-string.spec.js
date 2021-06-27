import isString from './is-string'

describe('isString()', () => {
  it('Should be defined', () => {
    expect(isString).toBeDefined()
  })

  it('Should return "true" if receives a string value', () => {
    expect(isString('')).toBeTrue()
    expect(isString('123')).toBeTrue()
    expect(isString('name')).toBeTrue()
    expect(isString('john ' + 'doe')).toBeTrue()
    expect(isString({})).toBeFalse()
    expect(isString({ name: 'moka' })).toBeFalse()
    expect(isString(() => {})).toBeFalse()
  })
})

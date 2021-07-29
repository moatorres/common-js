import isValidKeyName from './is-valid-key-name'

let obj = {}

describe('isValidKeyName()', () => {
  it('Should be defined', () => {
    expect(isValidKeyName).toBeDefined()
  })

  it('Should return "true" only it finds a property with its name matching the received value', () => {
    expect(isValidKeyName('a', obj)).toBeTrue()
    expect(isValidKeyName('nome', obj)).toBeTrue()
    expect(isValidKeyName('type', obj)).toBeTrue()
    expect(isValidKeyName(Symbol('a'), obj)).toBeTrue()
    expect(isValidKeyName([], obj)).toBeFalse()
  })
})

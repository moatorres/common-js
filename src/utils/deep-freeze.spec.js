import deepFreeze from './deep-freeze'

let original = {
  name: 'Moka',
  age: 33,
  address: { street: 'Menlo Park', zipcode: '12345-123' },
}

let congelado = deepFreeze(original)

describe('deepFreeze()', () => {
  it('Should return a frozen object', () => {
    expect(congelado).toBeFrozen()
  })

  it('Should not allow properties to be overwritten', () => {
    expect(() => (congelado.name = 'Floca')).toThrow(TypeError)
    expect(() => (congelado.age = 21)).toThrow(TypeError)
  })

  it('Should freeze nested objects and properties', () => {
    expect(() => (congelado.address.street = 'Boo')).toThrow(TypeError)
  })
})

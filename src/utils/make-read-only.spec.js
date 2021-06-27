import makeReadOnly from './make-read-only'

let objeto = {
  name: 'John Doe',
  age: 21,
  address: {
    streetName: '50th avenue',
    buildingNumber: '1000',
  },
}

describe('makeReadOnly', () => {
  it('Should be defined', () => {
    expect(makeReadOnly).toBeDefined()
  })

  it('Should shallow-freeze an object', () => {
    let res = makeReadOnly(objeto)
    expect(res).toBeFrozen()
    expect(() => (res.name = '')).toThrow()
    expect(() => delete res.age).toThrow()
  })

  it('Should not deep-freeze an object', () => {
    let res = makeReadOnly(objeto)
    res.address.streetName = '5th Av.'
    delete res.address.buildingNumber

    expect(res).toBeFrozen()
    expect(res.address.streetName).toEqual('5th Av.')
    expect(res.address.buildingNumber).toBe(undefined)
  })
})

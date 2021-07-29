import getKeys from './get-keys'

let sym = Symbol('type')
let obj = { name: 'moka', type: 'company' }
let objWithSymbolProps = { name: 'moka', [sym]: 'company' }

describe('getKeys()', () => {
  it('Should be defined', () => {
    expect(getKeys).toBeDefined()
  })

  it("Should return a target's own property keys", () => {
    let res = getKeys(obj)
    expect(res).toEqual(['name', 'type'])
  })

  it("Should also return the target's own symbol properties", () => {
    let res = getKeys(objWithSymbolProps)
    expect(res).toEqual(['name', sym])
  })
})

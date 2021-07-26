import getEnumerableOwnPropSymbols from './get-enumerable-own-prop-symbols'

describe('getEnumerableOwnPropSymbols()', () => {
  it('Should be defined', () => {
    expect(getEnumerableOwnPropSymbols).toBeDefined()
  })

  it("Should return an array of an object's enumerable own property symbols", () => {
    const object = {}
    const a = Symbol('a')
    const b = Symbol.for('b')
    const c = Symbol.for('c')

    object[a] = 'localSymbol'
    object[b] = 'globalSymbol'

    Object.defineProperty(object, c, {
      value: 'anotherGlobalSymbol',
      enumerable: false,
    })

    let res = getEnumerableOwnPropSymbols(object)

    expect(res.length).toEqual(2)
    expect(res).toEqual([a, b])
  })
})

import getOwnPropertyKeys from './get-own-property-keys'

let objeto, res

beforeEach(() => {
  objeto = {
    nome: 'Moka',
    [Symbol.iterator]: function* () {
      yield this.nome
    },
  }
  res = getOwnPropertyKeys(objeto)
})

describe('getOwnPropertyKeys()', () => {
  it('Should be defined', () => {
    expect(getOwnPropertyKeys).toBeDefined()
  })

  it('Should correctly extract Symbols', () => {
    expect(typeof res[1]).toEqual('symbol')
  })

  it("Should return an array of properties' names and symbols", () => {
    expect(res).toBeArrayOfSize(2)
  })
})

import { makeIdFactory } from './unique-id'

let nanoid = {
  customAlphabet: () => (alfabeto, chars) => '8417aa9b9ed3f1750ea24e96',
}

let UniqueID = makeIdFactory({ nanoid })
let id = UniqueID.create()
const formatoEsperado = (id) => /^[a-f\d]{24}/.test(id)

describe('makeIdFactory()', () => {
  describe('.create()', () => {
    it('Should be defined', () => {
      expect(UniqueID.create).toBeDefined()
    })

    it('Should return a valid instance of an Identifier object', () => {
      expect(id.isEqual).toBeDefined()
      expect(id.toString).toBeDefined()
      expect(id.toValue).toBeDefined()
      expect(id.isEqual(id)).toBe(true)
    })

    it('Instance should have an id value', () => {
      expect(id.toValue()).not.toBeNull()
    })

    it('Should have a value in the expected format if no custom id value is provided', () => {
      const valueValido = formatoEsperado(id.toValue())
      expect(valueValido).toBeTrue()
    })

    it('Should accept a custom "id" value', () => {
      let id = UniqueID.create('123123')
      expect(id.toValue()).not.toBeNull()
    })

    it('Should accept a custom "id" value', () => {
      let id = UniqueID.create('123123')

      expect(id.isEqual).toBeDefined()
      expect(id.toString).toBeDefined()
      expect(id.toValue).toBeDefined()
      expect(id.isEqual(id)).toBe(true)

      const valueValido = formatoEsperado(id.toValue())
      const stringValida = formatoEsperado(id.toString())

      expect(valueValido).toBeFalse()
      expect(stringValida).toBeFalse()
    })
  })
})

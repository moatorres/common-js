import { makeValueObject } from './value-object'

let objeto, outro

beforeEach(() => {
  objeto = makeValueObject({ nome: 'Moka' })
  outro = makeValueObject({ nome: 'Floca' })
})

describe('makeValueObject', () => {
  describe('.props', () => {
    it('Should be defined', () => {
      expect(objeto.props).toBeDefined()
    })
  })

  describe('.equals()', () => {
    it('Should be defined', () => {
      expect(objeto.equals).toBeDefined()
    })

    it('Should return "true" if an object has the same props and values', () => {
      expect(objeto.equals(objeto)).toBeTrue()
    })

    it('Should return "false" if an object has NOT the same props and values', () => {
      expect(objeto.equals(outro)).toBeFalse()
    })
  })
})

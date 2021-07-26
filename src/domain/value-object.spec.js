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

  describe('.isEqual()', () => {
    it('Should be defined', () => {
      expect(objeto.isEqual).toBeDefined()
    })

    it('Should return "true" if an object has the same props and values', () => {
      expect(objeto.isEqual(objeto)).toBeTrue()
    })

    it('Should return "false" if an object has NOT the same props and values', () => {
      expect(objeto.isEqual(outro)).toBeFalse()
    })
  })
})

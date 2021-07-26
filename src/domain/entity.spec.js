import { makeEntity } from './entity'
import { makeIdentifier } from './identifier'

let id = makeIdentifier('1')
let newId = makeIdentifier('2')
const entidade = makeEntity({ props: { nome: 'Moka' } })

describe('Entity', () => {
  describe('.id', () => {
    it('Should be defined', () => {
      expect(entidade.id).toBeDefined()
    })

    it('Should be a valid "Identifier" instance', () => {
      expect(entidade.id.isEqual).toBeDefined()
      expect(entidade.id.toString).toBeDefined()
      expect(entidade.id.toValue).toBeDefined()
    })
  })

  describe('.props', () => {
    it('Should be defined', () => {
      expect(entidade.props).toBeDefined()
    })

    it('Should be a valid object', () => {
      expect(entidade.props instanceof Object).toBeTrue()
    })
  })

  describe('.isEqual()', () => {
    it('Should be defined', () => {
      expect(entidade.isEqual).toBeDefined()
    })

    it('Should return "true" if provided an object with the same "id"', () => {
      expect(entidade.isEqual(entidade)).toBeTrue()
    })

    it('Should return "false" if provided an object with a different "id"', () => {
      const outra = makeEntity({ id: newId, props: { nome: 'Floca' } })

      expect(entidade.isEqual(outra)).toBeFalse()
    })
  })
})

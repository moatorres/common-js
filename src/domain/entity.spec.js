import { makeEntity } from './entity'
import { makeIdentifier } from './identifier'

let id = makeIdentifier('1')
let newId = makeIdentifier('2')
const entidade = makeEntity({ id: id, props: { nome: 'Moka' } })

describe('Entity Class', () => {
  describe('.equals()', () => {
    it('Should be defined', () => {
      expect(entidade.equals).toBeDefined()
    })

    it('Should return "true" if provided an object with the same "id"', () => {
      expect(entidade.equals(entidade)).toBeTrue()
    })

    it('Should return "false" if provided an object with a different "id"', () => {
      const outra = makeEntity({ id: newId, props: { nome: 'Floca' } })

      expect(entidade.equals(outra)).toBeFalse()
    })
  })
})

import removeNestedNull from './remove-nested-null'
import { deeeplyNestedObject } from './remove-nested-null.spec.setup'

let objeto

beforeEach(() => {
  objeto = deeeplyNestedObject
})

describe('removeNestedNull', () => {
  it('Should be defined', () => {
    expect(removeNestedNull).toBeDefined()
  })

  it('Should NOT mutate the original object', () => {
    removeNestedNull(objeto)
    expect(objeto).toEqual(deeeplyNestedObject)
  })

  it('Should remove nested null or undefined properties', () => {
    let res = removeNestedNull(objeto)

    expect(res.age).not.toBeDefined()
    expect(res.address).not.toBeDefined()
    expect(res.nested).not.toBeDefined()
    expect(() => res.address.street).toThrow()
    expect(() => res.address.number).toThrow()
    expect(() => res.address.zipcode).toThrow()
    expect(() => res.address.zipcode.nested).toThrow()
  })

  it('Should NOT remove null or undefined array entries', () => {
    let res = removeNestedNull(objeto)

    expect(res).toEqual({
      nome: 'John Doe',
      emails: [
        { id: 1, value: 'test@test.com' },
        { id: '', value: '' },
      ],
    })
  })
})

import { checkType } from './check-type'

let objeto = { nome: 'moka' }

describe('checkType()', () => {
  it('Should return "true" if param is of expected type', () => {
    const res = checkType(objeto, 'object')
    expect(checkType([], 'array')).toEqual(true)
    expect(res).toBeTrue()
  })

  it('Should return typeof passed param when expected type is not provided', () => {
    let objectId = { str: 'abc123def123abc123def123' }

    expect(checkType(objectId)).toEqual('object')
    expect(checkType([])).toEqual('object')
    expect(checkType('')).toEqual('string')
    expect(checkType(() => {})).toEqual('function')
  })

  it('Should throw if provided an wrong type param', () => {
    expect(() => checkType(objeto, 'boolean')).toThrow()
    expect(() => checkType(objeto, 'string')).toThrow()
    expect(() => checkType(objeto, 'function')).toThrow()
    expect(() => checkType(objeto, 'array')).toThrow()
    expect(() => checkType(objeto, 'primitive')).toThrow()
    expect(() => checkType(objeto, 'boolean')).toThrow()
  })
})

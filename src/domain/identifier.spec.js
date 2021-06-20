import { makeIdentifier } from './identifier'

let id = makeIdentifier('123')

describe('Identifier', () => {
  it('.equals() should return "true" if provided an Identifier object instance with same "id" value', () => {
    expect(id.equals(id)).toBe(true)
  })

  it('.toValue() should return an id value', () => {
    expect(id.toValue()).toEqual('123')
  })

  it('.toString() should return an id string', () => {
    expect(typeof id.toString()).toBe('string')
    expect(id.toString()).toEqual('123')
  })
})

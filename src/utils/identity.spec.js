import identity from './identity'
import isNumber from './is-number'

describe('identity()', () => {
  it('Should be defined', () => {
    expect(identity).toBeDefined()
  })

  it('Should return an identity of the received value', () => {
    let res = identity(1)
    expect(typeof res).toEqual('number')
  })

  it('Should allow us to map through the identity', () => {
    let array = [1, 2, 3].map(identity)
    expect(array.every(isNumber)).toBeTrue()
  })
})

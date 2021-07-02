import isArray from './is-array'
import stringToPath from './string-to-path'

describe('stringToPath()', () => {
  it('Should be defined', () => {
    expect(stringToPath).toBeDefined()
  })

  it('Should allow us to transform strings to a property path array', () => {
    let res = stringToPath('address.business.streetName')

    expect(isArray(res)).toBeTrue()
    expect(res.length).toEqual(3)
    expect(res).toEqual(['address', 'business', 'streetName'])
  })
})

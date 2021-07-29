import isStringifiedSet from './is-stringified-set'
import safeJSON from './safe-json'

describe('isStringifiedSet()', () => {
  it('Should be defined', () => {
    expect(isStringifiedSet).toBeDefined()
  })

  it('Should allow us to identify stringified Sets during JSON.parse eval', () => {
    let map = new Set([1, '🚀'])
    let stringified = safeJSON.stringify(map)
    let reviver = (key, value) => (isStringifiedSet(value) ? true : value)

    let res = JSON.parse(stringified, reviver)
    expect(res).toBeTrue()
  })
})

import isStringifiedMap from './is-stringified-map'
import safeJSON from './safe-json'

describe('isStringifiedMap()', () => {
  it('Should be defined', () => {
    expect(isStringifiedMap).toBeDefined()
  })

  it('Should allow us to identify stringified Maps during JSON.parse eval', () => {
    let map = new Map([[1, '🚀']])
    let stringified = safeJSON.stringify(map)
    let reviver = (key, value) => (isStringifiedMap(value) ? true : value)

    let res = JSON.parse(stringified, reviver)
    expect(res).toBeTrue()
  })
})

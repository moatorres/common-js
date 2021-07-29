import stringifyMap from './stringify-map'
import mapReviver from './map-reviver'

describe('stringifyMap()', () => {
  it('Should be defined', () => {
    expect(stringifyMap).toBeDefined()
  })

  it('Should allow us to successfully stringify Map objects by passing it as a second argument to JSON.stringify native function', () => {
    let myMap = new Map([
      [1, 'moka'],
      [2, 'floca'],
    ])

    let stringified = JSON.stringify(myMap, stringifyMap)
    let parsed = JSON.parse(stringified, mapReviver)

    expect(parsed).toEqual(myMap)
    expect(parsed instanceof Map).toBeTrue()
    expect(myMap.get(1)).toEqual(parsed.get(1))
    expect(myMap.get(2)).toEqual(parsed.get(2))
    expect(typeof stringified === 'string').toBeTrue()
  })
})

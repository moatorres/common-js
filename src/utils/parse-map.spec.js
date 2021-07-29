import mapReviver from './parse-map'
import stringifyMap from './stringify-map'

describe('mapReviver()', () => {
  it('Should be defined', () => {
    expect(mapReviver).toBeDefined()
  })

  it('Should allow us to successfully parse Map objects by adding it as a second argument to JSON.parse native function', () => {
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

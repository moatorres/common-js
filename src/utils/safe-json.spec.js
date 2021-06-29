import safeJSON from './safe-json'

let myObject, expectedMapString, expectedSetString

beforeEach(() => {
  myObject = {
    name: {
      firstName: null,
      lastName: undefined,
      age: 21,
      type: 'admin',
    },
    map: new Map([
      [1, 'a'],
      [2, 'b'],
    ]),
    set: new Set([1, 2, 3]),
  }
  expectedMapString = '"map":{"dataType":"Map","value":[[1,"a"],[2,"b"]]}'
  expectedSetString = '"set":{"dataType":"Set","value":[1,2,3]}'
})

describe('safeJSON', () => {
  it('Should be defined', () => {
    expect(safeJSON).toBeDefined()
  })

  describe('.stringify()', () => {
    it('Should be defined', () => {
      expect(safeJSON.stringify).toBeDefined()
    })

    it('Should safely stringify Map and Set objects', () => {
      let stringified = safeJSON.stringify(myObject)
      expect(typeof stringified).toEqual('string')
      expect(stringified.includes(expectedMapString)).toBeTrue()
      expect(stringified.includes(expectedSetString)).toBeTrue()
    })
  })

  describe('.parse()', () => {
    it('Should be defined', () => {
      expect(safeJSON.parse).toBeDefined()
    })

    it('Should safely parse Map and Set objects', () => {
      let stringified = safeJSON.stringify(myObject)
      let parsed = safeJSON.parse(stringified)

      expect(parsed).toEqual(myObject)
      expect(parsed.map instanceof Map).toBeTrue()
      expect(parsed.map.get(1)).toEqual('a')
      expect(parsed.map.get(2)).toEqual('b')
      expect(parsed.set instanceof Set).toBeTrue()
      expect(parsed.set.has(1)).toBeTrue()
      expect(parsed.set.has(2)).toBeTrue()
    })
  })
})

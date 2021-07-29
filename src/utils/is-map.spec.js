import isMap from './is-map'

let num = 1
let str = 'hey'
let fun = () => {}
let set = new Set([1, 2])
let map = new Map([[1, '🚀']])

describe('isMap()', () => {
  it('Should be defined', () => {
    expect(isMap).toBeDefined()
  })

  it('Should correctly identify Map type values', () => {
    expect(isMap(num)).toBeFalse()
    expect(isMap(str)).toBeFalse()
    expect(isMap(fun)).toBeFalse()
    expect(isMap(set)).toBeFalse()
    expect(isMap(map)).toBeTrue()
    expect(isMap(new Map())).toBeTrue()
  })
})

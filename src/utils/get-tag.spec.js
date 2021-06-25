import getTag from './get-tag'

let und
let undef = undefined
let nul = null
let string = 'moka'
let number = 1
let array = [1, 2, 3]
let map = new Map()
let set = new Set()
let weakMap = new WeakMap()
let weakSet = new WeakSet()
let fun = () => {}

describe('getTag()', () => {
  it('Should be defined', () => {
    expect(getTag).toBeDefined()
  })

  it('Should return the correct string tag of any value', () => {
    expect(getTag(und)).toEqual('[object Undefined]')
    expect(getTag(undef)).toEqual('[object Undefined]')
    expect(getTag(nul)).toEqual('[object Null]')
    expect(getTag(string)).toEqual('[object String]')
    expect(getTag(number)).toEqual('[object Number]')
    expect(getTag(array)).toEqual('[object Array]')
    expect(getTag(map)).toEqual('[object Map]')
    expect(getTag(set)).toEqual('[object Set]')
    expect(getTag(weakMap)).toEqual('[object WeakMap]')
    expect(getTag(weakSet)).toEqual('[object WeakSet]')
    expect(getTag(fun)).toEqual('[object Function]')
  })
})

import isArray from './is-array'

describe('Utilities isArray()', () => {
  it('Should return `true` if receives an array type object', () => {
    let arr = []
    let arrTwo = Array(10)
    let arrThree = [1, '2', () => {}]
    expect(isArray(arr)).toEqual(true)
    expect(isArray(arrTwo)).toEqual(true)
    expect(isArray(arrThree)).toEqual(true)
  })

  it('Should return `false` if receives NOT an array type', () => {
    let str = ''
    let fn = () => {}
    let num = 1
    let map = new Map()
    let weakmap = new WeakMap()
    let set = new Set()
    let weakset = new WeakSet()
    let regex = new RegExp(/^/)
    let strTwo = String(1)
    let numTwo = Number('1')

    expect(isArray(str)).toEqual(false)
    expect(isArray(fn)).toEqual(false)
    expect(isArray(num)).toEqual(false)
    expect(isArray(map)).toEqual(false)
    expect(isArray(weakmap)).toEqual(false)
    expect(isArray(set)).toEqual(false)
    expect(isArray(weakset)).toEqual(false)
    expect(isArray(regex)).toEqual(false)
    expect(isArray(strTwo)).toEqual(false)
    expect(isArray(numTwo)).toEqual(false)
  })
})

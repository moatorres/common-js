import isWeakMap from './is-weak-map'

let undefined
let number = 1
let string = ''
let array = []
let regex = new RegExp('')
let set = new Set([1, 2, 3])
let sym = Symbol('a')
let symbol = Symbol.for('b')
let weakset = new WeakSet()
let weakmap = new WeakMap()

describe('isWeakMap()', () => {
  it('Should be defined', () => {
    expect(isWeakMap).toBeDefined()
  })

  it('Should return "false" if receives a non-RegExp value', () => {
    expect(isWeakMap(undefined)).toBeFalse()
    expect(isWeakMap(number)).toBeFalse()
    expect(isWeakMap(string)).toBeFalse()
    expect(isWeakMap(array)).toBeFalse()
    expect(isWeakMap(weakset)).toBeFalse()
    expect(isWeakMap(regex)).toBeFalse()
    expect(isWeakMap(set)).toBeFalse()
    expect(isWeakMap(sym)).toBeFalse()
    expect(isWeakMap(symbol)).toBeFalse()
  })

  it('Should return "true" if receives a RegExp value', () => {
    expect(isWeakMap(weakmap)).toBeTrue()
  })
})

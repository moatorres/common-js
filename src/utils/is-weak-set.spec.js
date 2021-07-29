import isWeakSet from './is-weak-set'

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

describe('isWeakSet()', () => {
  it('Should be defined', () => {
    expect(isWeakSet).toBeDefined()
  })

  it('Should return "false" if receives a non-RegExp value', () => {
    expect(isWeakSet(undefined)).toBeFalse()
    expect(isWeakSet(number)).toBeFalse()
    expect(isWeakSet(string)).toBeFalse()
    expect(isWeakSet(array)).toBeFalse()
    expect(isWeakSet(weakmap)).toBeFalse()
    expect(isWeakSet(regex)).toBeFalse()
    expect(isWeakSet(set)).toBeFalse()
    expect(isWeakSet(sym)).toBeFalse()
    expect(isWeakSet(symbol)).toBeFalse()
  })

  it('Should return "true" if receives a RegExp value', () => {
    expect(isWeakSet(weakset)).toBeTrue()
  })
})

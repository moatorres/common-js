import isSymbol from './is-symbol'

let undefined
let number = 1
let string = ''
let array = []
let weakset = new WeakSet()
let regex = new RegExp('')
let set = new Set([1, 2, 3])
let sym = Symbol('a')
let symbol = Symbol.for('b')

describe('isSymbol()', () => {
  it('Should be defined', () => {
    expect(isSymbol).toBeDefined()
  })

  it('Should return "false" if receives a non-RegExp value', () => {
    expect(isSymbol(undefined)).toBeFalse()
    expect(isSymbol(number)).toBeFalse()
    expect(isSymbol(string)).toBeFalse()
    expect(isSymbol(array)).toBeFalse()
    expect(isSymbol(weakset)).toBeFalse()
    expect(isSymbol(regex)).toBeFalse()
    expect(isSymbol(set)).toBeFalse()
  })

  it('Should return "true" if receives a RegExp value', () => {
    expect(isSymbol(sym)).toBeTrue()
    expect(isSymbol(symbol)).toBeTrue()
  })
})

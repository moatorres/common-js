import isSet from './is-set'

let undefined
let number = 1
let string = ''
let array = []
let weakset = new WeakSet()
let reg = /^{d,}$/
let regex = new RegExp('')
let set = new Set([1, 2, 3])
let alsoSet = set.add(4)

describe('isSet()', () => {
  it('Should be defined', () => {
    expect(isSet).toBeDefined()
  })

  it('Should return "false" if receives a non-RegExp value', () => {
    expect(isSet(undefined)).toBeFalse()
    expect(isSet(number)).toBeFalse()
    expect(isSet(string)).toBeFalse()
    expect(isSet(array)).toBeFalse()
    expect(isSet(weakset)).toBeFalse()
    expect(isSet(reg)).toBeFalse()
    expect(isSet(regex)).toBeFalse()
  })

  it('Should return "true" if receives a RegExp value', () => {
    expect(isSet(set)).toBeTrue()
    expect(isSet(alsoSet)).toBeTrue()
  })
})

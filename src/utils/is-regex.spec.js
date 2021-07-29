import isRegExp from './is-regex'

let undefined
let number = 1
let string = ''
let array = []
let weakset = new WeakSet()
let reg = /^{d,}$/
let regex = new RegExp('')

describe('isRegExp()', () => {
  it('Should be defined', () => {
    expect(isRegExp).toBeDefined()
  })

  it('Should return "false" if receives a non-RegExp value', () => {
    expect(isRegExp(undefined)).toBeFalse()
    expect(isRegExp(number)).toBeFalse()
    expect(isRegExp(string)).toBeFalse()
    expect(isRegExp(array)).toBeFalse()
    expect(isRegExp(weakset)).toBeFalse()
  })

  it('Should return "true" if receives a RegExp value', () => {
    expect(isRegExp(reg)).toBeTrue()
    expect(isRegExp(regex)).toBeTrue()
  })
})

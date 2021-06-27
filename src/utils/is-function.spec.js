import isFunction from './is-function'

describe('isFunction()', () => {
  it('Should be defined', () => {
    expect(isFunction).toBeDefined()
  })

  it('Should return "true" if receives a function', () => {
    let oops
    let fn = () => {}
    let fun = f
    function f() {}
    let sum = 1 + 1

    expect(isFunction(f)).toBeTrue()
    expect(isFunction(fn)).toBeTrue()
    expect(isFunction(fun)).toBeTrue()
    expect(isFunction(Math.round)).toBeTrue()
    expect(isFunction(Array.isArray)).toBeTrue()
    expect(isFunction(Array.isArray([]))).toBeFalse()
    expect(isFunction(oops)).toBeFalse()
    expect(isFunction(sum)).toBeFalse()
    expect(isFunction(/abc/)).toBeFalse()
    expect(isFunction({ function: fn })).toBeFalse()
    expect(isFunction(false)).toBeFalse()
    expect(isFunction(true)).toBeFalse()
    expect(isFunction('')).toBeFalse()
    expect(isFunction(0)).toBeFalse()
    expect(isFunction([])).toBeFalse()
    expect(isFunction([{}])).toBeFalse()
    expect(isFunction({ 0: 0 })).toBeFalse()
  })
})

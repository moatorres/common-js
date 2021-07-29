import isInteger from './is-integer'

let n = 1
let nu = '1'
let num = 4 / 0
let max = Number.MAX_SAFE_INTEGER
let typeArr = new ArrayBuffer(16)

describe('isInteger()', () => {
  it('Should be defined', () => {
    expect(isInteger).toBeDefined()
  })

  it('Should allow us to correctly identify integer type values', () => {
    expect(isInteger(n)).toBeTrue()
    expect(isInteger(max)).toBeTrue()
    expect(isInteger(nu)).toBeFalse()
    expect(isInteger(num)).toBeFalse()
    expect(isInteger(typeArr)).toBeFalse()
    expect(isInteger(Infinity)).toBeFalse()
    expect(isInteger(Number('1'))).toBeTrue()
  })
})

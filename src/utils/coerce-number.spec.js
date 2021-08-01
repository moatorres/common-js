import coerceNumber from './coerce-number'

describe('coerceNumber()', () => {
  it('Should be defined', () => {
    expect(coerceNumber).toBeDefined()
  })

  it('Should allow us to coerce strings into numbers', () => {
    let str = '123'
    let res = coerceNumber(str)

    expect(res).toEqual(123)
    expect(typeof res).toEqual('number')
  })

  it('Should return "NaN" if value is not coercible', () => {
    let test = 'hey'
    let res = coerceNumber(test)

    expect(res).toEqual(NaN)
    expect(coerceNumber(1)).toEqual(1)
  })

  it('Should return coerce the first index value if receives an array', () => {
    let intArray = new Int16Array(16)
    intArray.set([1, 2, 3])

    expect(coerceNumber(['1', '2', '3'])).toEqual(1)
    expect(coerceNumber(intArray)).toEqual(1)
    expect(coerceNumber(new ArrayBuffer(16))).toEqual(NaN)
  })
})

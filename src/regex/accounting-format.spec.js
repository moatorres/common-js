import { toAccountingFormat } from './accounting-format'

describe('toAccountingFormat()', () => {
  it('Should be defined', () => {
    expect(toAccountingFormat).toBeDefined()
  })

  it('Should return a string value', () => {
    let res = toAccountingFormat(2490)
    expect(typeof res).toEqual('string')
  })

  it('Should allow us to format numbers to accounting format', () => {
    let res = toAccountingFormat(499990)
    expect(res).toEqual('4.999,90')
  })

  it('Should allow us to format string-numbers to accounting format', () => {
    let res = toAccountingFormat('499990')
    expect(res).toEqual('4.999,90')
  })

  it('Should allow to use comma separators', () => {
    let res = toAccountingFormat('499990', { useComma: true })
    expect(res).toEqual('4,999.90')
  })

  it('Should throw if receives a NaN value', () => {
    expect(() => toAccountingFormat('hey!')).toThrow(TypeError)
  })
})

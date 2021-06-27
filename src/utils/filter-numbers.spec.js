import filterNumbers from './filter-numbers'

describe('filterNumbers', () => {
  it('Should be defined', () => {
    expect(filterNumbers).toBeDefined()
  })

  it('Should remove non-number values', () => {
    let arr = [() => {}, {}, [], '', 1, 2, 3]
    let res = filterNumbers(arr)
    expect(res.length).toEqual(3)
  })

  it('Should coerce string-numbers to numbers', () => {
    let arr = [1, 2, 3, '4', '5', '6']
    let res = filterNumbers(arr)
    expect(res.length).toEqual(6)
  })

  it('Should return an array with only numbers', () => {
    let arr = [1, 2, 3, '4', '5', '6', () => {}, {}, [], '']
    let res = filterNumbers(arr)
    expect(res.every((v) => typeof v === 'number')).toBeTrue()
  })
})

import sum from './sum'

describe('sum()', () => {
  it('Should be defined', () => {
    expect(sum).toBeDefined()
  })

  it('Should return the sum of numbers in multidimensional arrays', () => {
    let arr = [2, 3, [2, 3, [2, 3]]]
    let res = sum(arr)
    expect(res).toEqual(15)
  })

  it('Should coerce string-number values', () => {
    let arr = [2, '3', ['2', 3, ['2', '3']]]
    let res = sum(arr)
    expect(res).toEqual(15)
  })

  it('Should skip NaN values', () => {
    let arr = [2, 3, 'a', [2, 3, () => {}, [2, 3, new Map()]]]
    let res = sum(arr)
    expect(res).toEqual(15)
  })
})

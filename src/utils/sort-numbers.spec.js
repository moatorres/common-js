import sortNumbers from './sort-numbers'

describe('sortNumbers', () => {
  it('Should be defined', () => {
    expect(sortNumbers).toBeDefined()
  })

  describe('.ascending()', () => {
    it('Should be defined', () => {
      expect(sortNumbers.ascending).toBeDefined()
    })

    it('Should remove non-number values', () => {
      let arr = [() => {}, {}, [], '', 1, 2, 3]
      let res = sortNumbers.ascending(arr)
      expect(res.length).toEqual(3)
    })

    it('Should coerce string-numbers to numbers', () => {
      let arr = [1, 2, 3, '4', '5', '6']
      let res = sortNumbers.ascending(arr)
      expect(res.length).toEqual(6)
    })

    it('Should return an array of ascendingly sorted numbers', () => {
      let arr = [120, '1', '10', 14, 2, '4', 8, '5', 8080, '6']
      let res = sortNumbers.ascending(arr)
      expect(res).toEqual([1, 2, 4, 5, 6, 8, 10, 14, 120, 8080])
    })
  })

  describe('.descending()', () => {
    it('Should be defined', () => {
      expect(sortNumbers.descending).toBeDefined()
    })

    it('Should remove non-number values', () => {
      let arr = [() => {}, {}, [], '', 1, 2, 3]
      let res = sortNumbers.descending(arr)
      expect(res.length).toEqual(3)
    })

    it('Should coerce string-numbers to numbers', () => {
      let arr = [1, 2, 3, '4', '5', '6']
      let res = sortNumbers.descending(arr)
      expect(res.length).toEqual(6)
    })

    it('Should return an array of descendingly sorted numbers', () => {
      let arr = [120, '1', '10', 14, 2, '4', 8, '5', 8080, '6']
      let res = sortNumbers.descending(arr)
      expect(res).toEqual([8080, 120, 14, 10, 8, 6, 5, 4, 2, 1])
    })
  })
})

import every from './every'

describe('every()', () => {
  it('Should be defined', () => {
    expect(every).toBeDefined()
  })

  it('Should allows us to assert if all items of an array meet the provided criteria', () => {
    let arr = [10, 20, 30]
    let isNumber = (v) => typeof v === 'number'
    expect(every(arr, isNumber)).toBeTrue()
  })

  it("Should return false if an item of the array doesn't meet the provided criteria", () => {
    let arr = [10, 20, 30]
    let isBiggerThan10 = (v) => v > 10
    expect(every(arr, isBiggerThan10)).toBeFalse()
  })
})

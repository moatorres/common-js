import removeByIndex from './remove-by-index'

describe('removeByIndex()', () => {
  it('Should be defined', () => {
    expect(removeByIndex).toBeDefined()
  })

  it('Should remove a character of a string by the received index value', () => {
    let string = 'Hey'
    let res = removeByIndex('0', string)
    expect(res).toEqual('ey')
  })

  it('Should remove an item of an array by the received index value', () => {
    let arr = [1, 2, 3]
    let res = removeByIndex(0, arr)
    expect(res).toEqual([2, 3])
  })
})

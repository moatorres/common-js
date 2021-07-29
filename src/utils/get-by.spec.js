import getBy from './get-by'

describe('getBy()', () => {
  it('Should be defined', () => {
    expect(getBy).toBeDefined()
  })

  it('Should return an item of an array if received a valid index value and an array', () => {
    let arr = [1, 2, 3]
    let res = getBy(2, arr)
    expect(res).toEqual(3)
  })

  it("Should return a prop's value if receives a string and an object", () => {
    let obj = { name: 'moka' }
    let res = getBy('name', obj)
    expect(res).toEqual('moka')
  })

  it('Should return a character if receives a valid index position (number|!isNaN) and a string', () => {
    let str = 'Hey'
    let res = getBy('0', str)
    expect(res).toEqual('H')
  })
})

import reverse from './reverse'

describe('reverse()', () => {
  it('Should be defined', () => {
    expect(reverse).toBeDefined()
  })

  it('Should reverse characters of a string', () => {
    let string = 'Hey'
    let res = reverse(string)
    expect(res).toEqual('yeH')
  })

  it('Should reverse items of an array', () => {
    let arr = [1, 2, 3]
    let res = reverse(arr)
    expect(res).toEqual([3, 2, 1])
  })
})

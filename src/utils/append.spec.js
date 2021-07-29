import append from './append'

let arr = [1, 2, 3]
let item = 4

describe('append()', () => {
  it('Should be defined', () => {
    expect(append).toBeDefined()
  })

  it('Should insert an item at the last position of the list', () => {
    expect(append(item, arr)).toEqual([1, 2, 3, 4])
  })

  it('Should return an array with the item at its last position and a list of characters if its second argument is a string', () => {
    let res = append('item', 'one')
    expect(res).toEqual(['o', 'n', 'e', 'item'])
  })

  it('Should return the original item inside an array if its second argument is not a string or an array', () => {
    // @ts-ignore
    let res = append('item', () => {})
    // @ts-ignore
    res = append('item', new Map())
    // @ts-ignore
    res = append('item', 1)
    console.log(res)
    expect(res).toEqual(['item'])
  })
})

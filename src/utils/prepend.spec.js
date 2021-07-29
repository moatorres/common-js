import prepend from './prepend'

let arr = [1, 2, 3]
let item = 4

describe('prepend()', () => {
  it('Should be defined', () => {
    expect(prepend).toBeDefined()
  })

  it('Should insert an item at the first position of the list', () => {
    expect(prepend(item, arr)).toEqual([4, 1, 2, 3])
  })

  it('Should return an array with the item at its first position and a list of characters if its second argument is a string', () => {
    let res = prepend('item', 'one')
    expect(res).toEqual(['item', 'o', 'n', 'e'])
  })

  it('Should return the original item inside an array if its second argument is not a string or an array', () => {
    // @ts-ignore
    let res = prepend('item', () => {})
    // @ts-ignore
    res = prepend('item', new Map())
    // @ts-ignore
    res = prepend('item', 1)
    console.log(res)
    expect(res).toEqual(['item'])
  })
})

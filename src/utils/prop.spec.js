import prop from './prop'

describe('prop()', () => {
  it('Should be defined', () => {
    expect(prop).toBeDefined()
  })

  it('Should allow us to extract the value of a property of the received object', () => {
    let obj = { name: 'moka', age: 10 }
    let res = prop('name', obj)
    expect(res).toEqual('moka')
  })

  it('Should allow us to extract an intem of an array if receives a number prop', () => {
    let arr = [1, 2, 3]
    let res = prop(0, arr)
    expect(res).toEqual(1)
  })

  it('Should return undefined if the property is not found', () => {
    let empty = {}
    let res = prop('nome', empty)
    expect(res).toEqual(undefined)
  })

  it('Should return undefined if the index is not found', () => {
    let arr = [1, 2, 3]
    let res = prop(3, arr)
    expect(res).toEqual(undefined)
  })
})

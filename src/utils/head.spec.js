import head from './head'

let string = 'Hey!'
let array = [1, 2, 3]

describe('head()', () => {
  it('Should be defined', () => {
    expect(head).toBeDefined()
  })

  it('Should throw if does not receive a string or an array', () => {
    // @ts-ignore
    expect(() => head(100)).toThrow(TypeError)
    // @ts-ignore
    expect(() => head(new Map([[1, 1]]))).toThrow(TypeError)
  })

  it('Should return the first item of an array or the first character of a string', () => {
    expect(head(string)).toEqual('H')
    expect(head(array)).toEqual(1)
  })

  it('Should not mutate the original string or array', () => {
    head(string)
    head(array)
    expect(string).toEqual(string)
    expect(array).toEqual(array)
  })
})

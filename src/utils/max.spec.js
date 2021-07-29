import max from './max'

describe('max()', () => {
  it('Should be defined', () => {
    expect(max).toBeDefined()
  })

  it('Should return the larger of its two arguments', () => {
    let res = max(10, 100)
    expect(res).toEqual(100)
  })

  it('Should return the larger of its two arguments', () => {
    let res = max([1], [1, 2, 3])
    expect(res).toEqual([1, 2, 3])
  })

  it('Should return the larger of its two arguments', () => {
    let res = max('a', 'b')
    expect(res).toEqual('b')
  })

  it('Should return the larger of its two arguments', () => {
    let res = max('holla', 'holla, que tal?')
    expect(res).toEqual('holla, que tal?')
  })

  it('Should return the larger of its two arguments', () => {
    let res = max(1, 1 + 1)
    expect(res).toEqual(2)
  })

  it('Should return the larger of its two arguments', () => {
    let res = max(5, (() => 50)())
    expect(res).toEqual(50)
  })
})

import dropLast from './drop-last'

describe('dropLast', () => {
  it('Should be defined', () => {
    expect(dropLast).toBeDefined()
  })

  it('Should allow us to drop the last item of an array', () => {
    let arr = [1, 2, 3]
    let res = dropLast(arr)
    expect(res).toEqual([1, 2])
  })
})

import tail from './tail'

describe('tail()', () => {
  it('Should be defined', () => {
    expect(tail).toBeDefined()
  })

  it('Should return the last item of an array', () => {
    const array = [1, 2, 3]
    expect(tail(array)).toEqual(3)
  })

  it('Should not mutate the original array', () => {
    const array = [10, 20, 30]
    tail(array)
    expect(array).toEqual(array)
  })
})

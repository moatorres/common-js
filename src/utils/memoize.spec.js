import memoize from './memoize'

describe('memoize', () => {
  it('Should be defined', () => {
    expect(memoize).toBeDefined()
  })

  it('Should create a function that memoizes the result of a function', () => {
    const array = [1, 2, 3]
    const spy = jest.fn()

    const getArray = () => {
      spy()
      return array
    }

    const memoized = memoize(getArray)
    const res = memoized()

    expect(res).toEqual(array)
    expect(res).toEqual(array)
    expect(res).toEqual(array)

    expect(spy).toHaveBeenCalledTimes(1)
  })

  it('Should accept a resolver as its second argument', () => {
    const array = [1, 2, 3]
    const resolver = () => 'Hey'
    const spy = jest.fn()

    const getArray = () => {
      spy()
      return array
    }

    const memoized = memoize(getArray, resolver)
    const res = memoized()
    console.log(memoized.cache)

    expect(res).toEqual(array)
    expect(res).toEqual(array)
    expect(res).toEqual(array)

    expect(spy).toHaveBeenCalledTimes(1)
  })
})

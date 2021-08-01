import arrayFromIterator from './array-from-iterator'

function makeRangeIterator(start = 0, end = Infinity, step = 1) {
  let nextIndex = start
  let count = 0

  const schema = (value, done) => ({ value, done })

  return {
    next: () => {
      let result
      if (nextIndex < end) {
        result = schema(nextIndex, false)
        nextIndex += step
        count++
        return result
      }
      return schema(count, true)
    },
  }
}

describe('arrayFromIterator()', () => {
  it('Should be defined', () => {
    expect(arrayFromIterator).toBeDefined()
  })

  it('Should allow us to parse iterators into arrays', () => {
    const it = makeRangeIterator(0, 100, 10)
    let res = arrayFromIterator(it)

    expect(res).toMatchSnapshot()
    expect(typeof res).toEqual('object')
  })
})

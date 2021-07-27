import ifElse from './if-else'

describe('ifElse', () => {
  it('Should be defined', () => {
    expect(ifElse).toBeDefined()
  })

  it('Should throw if predicate is not a function', () => {
    // @ts-ignore
    const dealWith = ifElse('predicate')
    expect(() => dealWith()).toThrow(
      TypeError('predicate must be of type function (ifElse)')
    )
  })

  it('Should throw if onTrue is not a function', () => {
    // @ts-ignore
    const dealWith = ifElse((v) => v > 1, 10)
    expect(() => dealWith()).toThrow(
      TypeError('onTrue must be of type function (ifElse)')
    )
  })

  it('Should throw if onTrue is not a function', () => {
    // prettier-ignore
    const dealWith = ifElse((v) => v > 1, (v) => v * 10, 0)

    expect(() => dealWith()).toThrow(
      TypeError('onFalse must be of type function (ifElse)')
    )
  })

  it('Should execute the provided "onTrue" function if predicate returns true', () => {
    const dealWith = ifElse(
      (v) => v > 1, // condition
      (v) => v * 10, // onTrue
      (v) => v - v // onFalse
    )
    expect(dealWith(10)).toEqual(100)
  })

  it('Should execute the provided "onFalse" function if predicate returns false', () => {
    const dealWith = ifElse(
      (v) => v > 1, // condition
      (v) => v * 10, // onTrue
      (v) => v - v // onFalse
    )
    expect(dealWith(0)).toEqual(0)
  })
})

describe('.any()', () => {
  it('Should be defined', () => {
    expect(ifElse.any).toBeDefined()
  })

  it('Should execute "onTrue" against all its arguments if predicate returns true for ANY of its values', () => {
    const dealWith = ifElse.any(
      (v) => typeof v === 'string', // condition
      (v) => (typeof v === 'string' ? v + ': found' : v), // onTrue
      () => 'bummer' // onFalse
    )
    expect(dealWith(1, 2, 'hey')).toEqual([1, 2, 'hey: found'])
  })

  it('Should execute "onFalse" against all its arguments if predicate returns false for ANY of its values', () => {
    const dealWith = ifElse.any(
      (v) => typeof v === 'string', // condition
      (v) => v, // onTrue
      () => 'bummer' // onFalse
    )
    expect(dealWith(2, 3, 4)).toEqual(['bummer', 'bummer', 'bummer'])
  })
})

describe('.all()', () => {
  it('Should be defined', () => {
    expect(ifElse.all).toBeDefined()
  })

  it('Should execute "onTrue" against all its arguments if predicate returns false for ALL of its values', () => {
    const dealWith = ifElse.all(
      (v) => v > 10, // condition
      (v) => v * 10, // onTrue
      (v) => v - v // onFalse
    )
    expect(dealWith(20, 30, 40)).toEqual([200, 300, 400])
  })

  it('Should execute "onFalse" against all its arguments if predicate returns false for ALL of its values', () => {
    const dealWith = ifElse.all(
      (v) => v > 10, // condition
      (v) => v * 10, // onTrue
      (v) => v - v // onFalse
    )
    expect(dealWith(20, 30, 9)).toEqual([0, 0, 0])
  })
})

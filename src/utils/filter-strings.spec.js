import filterStrings from './filter-strings'

describe('filterStrings()', () => {
  it('Should be defined', () => {
    expect(filterStrings).toBeDefined()
  })

  it('Should return an array of strings', () => {
    let mixedArr = [
      '',
      '123',
      'name',
      'jane' + 'doe',
      { name: '123' },
      ['john', 'doe'],
      () => {},
    ]

    let res = filterStrings(mixedArr)

    expect(res.length).toEqual(4)
    expect(res.every((v) => typeof v === 'string')).toBeTrue()
  })
})

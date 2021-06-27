import sortStrings from './sort-strings'

let array

beforeEach(() => {
  array = [
    'manga',
    'kiwi',
    'abacate',
    'laranja',
    'pêssego',
    () => {},
    13,
    {},
    ['melancia'],
  ]
})

describe('sortStrings', () => {
  it('Should be defined', () => {
    expect(sortStrings).toBeDefined()
  })

  describe('.ascending()', () => {
    it('Should be defined', () => {
      expect(sortStrings.ascending).toBeDefined()
    })

    it('Should remove non-string values', () => {
      let res = sortStrings.ascending(array)
      expect(res.every((v) => typeof v === 'string')).toBeTrue()
    })

    it('Should return an array of ascendingly sorted strings', () => {
      let res = sortStrings.ascending(array)
      expect(res).toEqual(['abacate', 'kiwi', 'laranja', 'manga', 'pêssego'])
    })
  })

  describe('.descending()', () => {
    it('Should be defined', () => {
      expect(sortStrings.descending).toBeDefined()
    })

    it('Should remove non-string values', () => {
      let res = sortStrings.descending(array)
      expect(res.every((v) => typeof v === 'string')).toBeTrue()
    })

    it('Should return an array of descendingly sorted strings', () => {
      let res = sortStrings.descending(array)
      expect(res).toEqual(['pêssego', 'manga', 'laranja', 'kiwi', 'abacate'])
    })
  })
})

import pick from './pick'

let obj = { name: 'moka', type: 'company', rating: 10 }

describe('pick()', () => {
  it('Should be defined', () => {
    expect(pick).toBeDefined()
  })

  it('Should return an object with ONLY found properties', () => {
    let res = pick(['name', 'age'], obj)
    expect(res).toEqual({ name: 'moka' })
  })

  describe('.all()', () => {
    it('Should be defined', () => {
      expect(pick.all).toBeDefined()
    })

    it('Should return an object with found props and undefined values for not-found properties', () => {
      let res = pick(['name', 'age'], obj)
      expect(res).toEqual({ name: 'moka', age: undefined })
    })
  })

  describe('.by()', () => {
    it('Should be defined', () => {
      expect(pick.by).toBeDefined()
    })

    it('Should return an object with ONLY props that match the received predicate', () => {
      let predicate = (v) => typeof v === 'number'
      let res = pick.by(predicate, obj)
      expect(res).toEqual({ rating: 10 })

      const isNameProp = (val, key) => key === 'name' && val === 'moka'
      res = pick.by(isNameProp, obj)

      expect(res).toEqual({ name: 'moka' })
    })

    it('Should return an empty object if no property matches the predicate', () => {
      let predicate = (v) => typeof v === 'function'
      let res = pick.by(predicate, obj)
      expect(res).toEqual({})
    })
  })
})

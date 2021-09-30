import fromEntries from './from-entries'

describe('fromEntries()', () => {
  it('Should be defined', () => {
    expect(fromEntries).toBeDefined()
  })

  it('Should return an object built with array pairs as its entries', () => {
    let entries = [
      ['id', '1'],
      ['name', 'Moka'],
      [
        'isAdmin',
        function () {
          return this.id === '1'
        },
      ],
    ]

    let object = fromEntries(entries)

    expect(object.id).toBeDefined()
    expect(object.id).toEqual('1')
    expect(object.name).toBeDefined()
    expect(object.name).toEqual('Moka')
    expect(object.isAdmin).toBeDefined()
    expect(typeof object.isAdmin).toEqual('function')
    expect(object.isAdmin()).toBeTrue()
  })

  it('Should ignore null or undefined properties', () => {
    let entries = [
      [null, '1'],
      [undefined, '2'],
    ]
    let object = fromEntries(entries)
    expect(object).toEqual({})
  })
})

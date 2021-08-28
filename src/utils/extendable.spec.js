import extendable from './extendable'

describe('extendable', () => {
  it('Should be defined', () => {
    expect(extendable).toBeDefined()
  })

  it('Should allow us to create an extendable function', () => {
    const proto = { id: 1, name: 'moka' }
    const hey = extendable.create(proto, { age: 21 })
    expect(hey.age).toEqual(21)

    const toLower = (v) => String(v).toLowerCase()

    const api = extendable.create(toLower, {
      isLowerCased: (v) => v === String(v).toLowerCase(),
    })

    api.extend({ type: 'extendable' })

    expect(api('A-HA')).toEqual('a-ha')
    expect(api.type).toEqual('extendable')
    expect(api.isLowerCased('bam')).toBeTrue()
    expect(api.isLowerCased('UHOH')).toBeFalse()
  })
})

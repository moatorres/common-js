import objectMap from './object-map'

describe('objectMap', () => {
  it('Should be defined', () => {
    expect(objectMap).toBeDefined()
  })

  it("Should allow us to map over an object's properties", () => {
    const proto = { id: 1, name: 'moka', age: '' }
    proto.map = objectMap

    let res = proto.map((value, key, object) => {
      if (!value) return 'empty'
      if (key === 'name') return 'new name'
    })

    console.log(res)
    expect(res.age).toEqual('empty')
    expect(res.name).toEqual('new name')
  })
})

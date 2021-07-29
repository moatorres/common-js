import safeObject from './safe-object'

describe('safeObject()', () => {
  it('Should be defined', () => {
    expect(safeObject).toBeDefined()
  })

  it("Should an object that won't throw when trying to get a property which doesn't exist.", () => {
    let obj = { name: 'John Doe' }
    obj.age
    const safe = safeObject(obj)

    expect(safe.name.getValue()).toEqual(obj.name)
    expect(safe.age.getValue()).not.toBeDefined()
  })
})

import filterObject from './filter-object'

describe('filterObject', () => {
  it('Should be defined', () => {
    expect(filterObject).toBeDefined()
  })

  it('Should allow us to filter array values', () => {
    const array = [1, 2, 3]
    const res = filterObject(array, (v) => typeof v !== 'number')
    expect(res).toEqual([])
  })

  it('Should allow us to filter properties of an object by its value', () => {
    const o = {
      id: 1,
      age: null,
    }

    const removeNull = (v) => v !== null
    const res = filterObject(o, removeNull)
    expect(res.age).not.toBeDefined()
  })

  it('Should filter objects recursively', () => {
    const o = {
      id: 1,
      props: {
        name: {
          firstName: 'moka',
          middleName: undefined,
          lastName: 'tecnologia',
        },
      },
      age: null,
    }

    const removeEmpty = (v) => v != null
    const res = filterObject(o, removeEmpty)
    expect(res.age).not.toBeDefined()
    expect(res.props.name.middleName).not.toBeDefined()
  })
})

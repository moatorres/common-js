import flattenAndStringify from './flatten-stringify'

let undef
const proto = {
  id: 1,
  name: 'moka',
  address: {
    street: '5th avenue',
    numbers: [1, 2, 3],
    nested: {
      super: {
        removeNull: null,
        removeUndefined: undef,
        dontRemoveFalseBoolean: false,
        dontRemoveZero: 0,
        dontRemoveEmptyString: '',
        deeply: {
          array: ['stringer', () => {}],
        },
      },
    },
  },
}

describe('flattenAndStringify', () => {
  it('Should be defined', () => {
    expect(flattenAndStringify).toBeDefined()
  })

  it('Should return an object', () => {
    let res = flattenAndStringify(proto)
    expect(typeof res).toEqual('object')
  })

  it('Should return an object with valid property names', () => {
    let res = flattenAndStringify(proto, { stringify: true })
    expect(Object.values(res).every((v) => typeof v === 'string')).toBeTrue()
  })

  it("Should recursively flatten nested properties' names", () => {
    let obj = {
      id: 1,
      address: {
        street: '50th Avenue',
      },
    }
    let res = flattenAndStringify(obj, { stringify: true })

    expect(res.id).toEqual('1')
    expect(res['address.street']).toBeDefined()
    expect(res['address.street']).toEqual('50th Avenue')
  })

  it("Should enumerate arrays' indexes to its parent property name", () => {
    let obj = {
      id: 1,
      addresses: ['1st Road', '3rd Street', '5th Av'],
    }
    let res = flattenAndStringify(obj)
    expect(res['addresses.0']).toEqual(obj.addresses[0])
    expect(res['addresses.1']).toEqual(obj.addresses[1])
    expect(res['addresses.2']).toEqual(obj.addresses[2])
  })

  it('Should accept an options object as its second parameter', () => {
    let res = flattenAndStringify(proto, {
      sort: true, // sort properties by its name in ascending order
      reverse: true, // if sort is set to true, sort properties by its name in descending order
      stringify: true, // stringifies values
      removeNullish: true, // removes strict null or undefined values
      ignoreArrays: true, // does not flatten array values
    })
    expect(res['address.numbers']).toEqual('1,2,3')
  })

  it('Shold accept an extension object as its third parameter', () => {
    let ext = { hallo: 'children' }
    let res = flattenAndStringify(proto, {}, ext)
    expect(res.hallo).toEqual(ext.hallo)
  })
})

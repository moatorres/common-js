import flattenAndStringify from './flatten-stringify'

let undef
const proto = {
  id: 1,
  name: 'moka',
  address: {
    name: 'hey',
    foo: [1, 2, 3],
    nested: {
      super: {
        id: null,
        empty: '',
        undef: undef,
        deeply: {
          jaz: ['ard', () => {}],
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
    let res = flattenAndStringify(proto)
    expect(Object.values(res).every((v) => typeof v === 'string')).toBeTrue()
  })

  it("Should recursively flatten nested properties' names", () => {
    let obj = {
      id: 1,
      address: {
        street: '50th Avenue',
      },
    }
    let res = flattenAndStringify(obj)
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
})

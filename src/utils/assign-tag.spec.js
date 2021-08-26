import assignTag from './assign-tag'

const toString = (v) => Object.prototype.toString.call(v)

describe('assignTag', () => {
  it('Should be defined', () => {
    expect(assignTag).toBeDefined()
  })

  it("Should allow us to add a 'toStringTag' to any object", () => {
    let fn = () => {}
    expect(toString(fn)).toEqual('[object Function]')

    assignTag(fn, 'Hey')
    expect(toString(fn)).toEqual('[object Hey]')
    expect(fn[Symbol.toStringTag]).toEqual('Hey')

    let o = {}
    expect(toString(o)).toEqual('[object Object]')

    assignTag(o, 'Hey')
    expect(toString(o)).toEqual('[object Hey]')
    expect(o[Symbol.toStringTag]).toEqual('Hey')

    let array = []
    expect(toString(array)).toEqual('[object Array]')

    assignTag(array, 'Hey')
    expect(toString(array)).toEqual('[object Hey]')
    expect(array[Symbol.toStringTag]).toEqual('Hey')

    let map = new Map()
    expect(toString(map)).toEqual('[object Map]')

    assignTag(map, 'Hey')
    expect(toString(map)).toEqual('[object Hey]')
    expect(map[Symbol.toStringTag]).toEqual('Hey')
  })

  it("Should add a 'toString' method to an object if it can't find one, then assign a 'toStringTag' to it", () => {
    const proto = Object.create(null)
    expect(proto.toString).not.toBeDefined()

    assignTag(proto, 'Hey')

    expect(proto.toString).toBeDefined()
    expect(toString(proto)).toEqual('[object Hey]')
    expect(proto[Symbol.toStringTag]).toEqual('Hey')
  })
})

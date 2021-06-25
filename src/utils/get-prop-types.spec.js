import getPropTypes from './get-prop-types'

let objeto = {
  name: 'moka',
  age: 21,
  isUnderage: function () {
    return this.age < 18
  },
  emails: ['moka@moka.com', 'floca@floca.com'],
}

describe('getPropTypes()', () => {
  it('Should be defined', () => {
    expect(getPropTypes).toBeDefined()
  })

  it('Should not coerce strings of numbers', () => {
    let stringProps = {
      id: '123',
      name: 'moka',
    }

    let res = getPropTypes(stringProps)

    expect(res.types.every((v) => v.type === 'string')).toBeTrue()
    expect(res.types[0].type).toEqual('string')
    expect(res.types[0].key).toEqual('id')
    expect(res.types[1].value).not.toBeDefined()
  })

  it('Should correctly return typeof number values', () => {
    let numberProps = {
      age: 21,
      sum: 1 + 1,
    }

    let res = getPropTypes(numberProps)

    expect(res.types.every((v) => v.type === 'number')).toBeTrue()
    expect(res.types[0].type).toEqual('number')
    expect(res.types[0].key).toEqual('age')
    expect(res.types[1].value).not.toBeDefined()
  })

  it("Should return functions' tags", () => {
    let functionProps = {
      isUnderage: function (age) {
        return age < 18
      },
      double: function (num) {
        return num * 2
      },
    }

    let res = getPropTypes(functionProps)

    expect(res.types.every((v) => v.type === 'function')).toBeTrue()
    expect(res.types[0].type).toEqual('function')
    expect(res.types[0].key).toEqual('isUnderage')
    expect(res.types[1].value).not.toBeDefined()
  })

  it('Should correctly recognize array types', () => {
    let arrayProps = {
      emails: ['moka@moka.com', 'floca@floca.com'],
      empty: [],
    }

    let res = getPropTypes(arrayProps)

    expect(res.types.every((v) => v.type === 'array')).toBeTrue()
    expect(res.types[0].type).toEqual('array')
    expect(res.types[0].key).toEqual('emails')
    expect(res.types[1].value).not.toBeDefined()
  })

  describe('withValues', () => {
    it("Should NOT return an object properties' values if 'withValues' is not set", () => {
      let res = getPropTypes(objeto)
      expect(res.types.every((v) => !v.value)).toBeTrue()
    })

    it("Should NOT return an object properties' values if 'withValues' is false", () => {
      let res = getPropTypes(objeto, false)
      expect(res.types.every((v) => !v.value)).toBeTrue()
    })

    it("Should return an object properties' values if 'withValues' is true", () => {
      let res = getPropTypes(objeto, true)

      expect(res.types).toBeArray()
      expect(res.types).toBeArrayOfSize(4)
      expect(res.types).toHaveLength(Object.keys(objeto).length)
      expect(res.types[0].type).toEqual('string')
      expect(res.types[0].key).toEqual('name')
      expect(res.types[0].value).toEqual('moka')
      expect(res.types[1].type).toEqual('number')
      expect(res.types[1].key).toEqual('age')
      expect(res.types[1].value).toEqual(21)
      expect(res.types[2].type).toEqual('function')
      expect(res.types[2].key).toEqual('isUnderage')
      expect(res.types[2].value).toEqual(objeto.isUnderage)
      expect(res.types[3].type).toEqual('array')
      expect(res.types[3].key).toEqual('emails')
      expect(res.types[3].value).toEqual(objeto.emails)
      expect(res.types[3].value).toBeArrayOfSize(2)
    })
  })
})

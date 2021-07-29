import toString from './to-string'

let obj = { nome: 'moka' }
let map = new Map([[1, 'tomato']])
let set = new Set(['my', 'set'])
let nested = [{ id: 1 }]
let deep = [{ deep: [{ foo: { nested: [{ baz: 'bar' }] } }] }]
let arr = [0, 1, 2, 'hey', true, null, undefined, map, set, obj, nested, deep]

let expected =
  '0,1,2,hey,true,null,undefined,1,tomato,my,set,nome,moka,id,1,deep,foo,nested,baz,bar'

describe('toString()', () => {
  it('Should be defined', () => {
    expect(toString).toBeDefined()
  })

  it('Should convert objects to strings', () => {
    let res = toString(obj)
    let expected = 'nome,moka'
    expect(typeof res).toEqual('string')
    expect(res).toEqual(expected)
  })

  it('Should convert Maps to strings', () => {
    let res = toString(map)
    let expected = '1,tomato'
    expect(typeof res).toEqual('string')
    expect(res).toEqual(expected)
  })

  it('Should natively convert WeakMaps to strings', () => {
    let weakMap = new WeakMap([])
    let res = toString(weakMap)
    let expected = '[object WeakMap]' // TypeTags.WeakMap
    expect(typeof res).toEqual('string')
    expect(res).toEqual(expected)
  })

  it('Should convert Sets to strings', () => {
    let res = toString(set)
    let expected = 'my,set'
    expect(typeof res).toEqual('string')
    expect(res).toEqual(expected)
  })

  it('Should natively convert WeakSets to strings', () => {
    let weakSet = new WeakSet()
    let res = toString(weakSet)
    let expected = '[object WeakSet]' // TypeTags.WeakSet
    expect(typeof res).toEqual('string')
    expect(res).toEqual(expected)
  })

  it('Should natively convert Symbols to strings', () => {
    let symbol = Symbol('foo')
    let res = toString(symbol)
    let expected = 'Symbol(foo)'
    expect(typeof res).toEqual('string')
    expect(res).toEqual(expected)
  })

  it('Should recursively convert nested arrays into strings', () => {
    let res = toString(arr)
    let expected =
      '0,1,2,hey,true,null,undefined,1,tomato,my,set,nome,moka,id,1,deep,foo,nested,baz,bar'
    expect(typeof res).toEqual('string')
    expect(res).toEqual(expected)
  })
})

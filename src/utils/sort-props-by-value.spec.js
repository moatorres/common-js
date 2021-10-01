import sortPropsByValue from './sort-props-by-value'

let obj1 = {
  id: 1,
  name: 'marcio',
}
let obj2 = {
  id: 2,
  name: 'ligia',
}
let obj3 = {
  id: 3,
  name: 'lucia',
}

let unordered = {
  obj3,
  obj2,
  obj1,
}

describe('sortPropsByValue()', () => {
  it('Should be defined', () => {
    expect(sortPropsByValue).toBeDefined()
  })

  it("Should sort an object's properpties by its values", () => {
    let res = sortPropsByValue(unordered, 'id')
    let expected = { obj1, obj2, obj3 }
    expect(JSON.stringify(res) === JSON.stringify(expected)).toBeTrue()
  })

  it("Should accept 'option.reverse' as its third argument", () => {
    let res = sortPropsByValue(unordered, 'id', { reverse: true })
    let expected = { obj3, obj2, obj1 }
    expect(JSON.stringify(res) === JSON.stringify(expected)).toBeTrue()
  })

  it("Should correctly sort an object's properties if its values are strings", () => {
    let res = sortPropsByValue(unordered, 'name')
    let expected = { obj2, obj3, obj1 }
    expect(JSON.stringify(res) === JSON.stringify(expected)).toBeTrue()
  })

  it("Should accept 'option.reverse' as its third argument", () => {
    let res = sortPropsByValue(unordered, 'name', { reverse: true })
    let expected = { obj1, obj3, obj2 }
    expect(JSON.stringify(res) === JSON.stringify(expected)).toBeTrue()
  })

  xit('Should benchmark ES8 vs. ES10', () => {
    var iterations = 10000

    // console.time('ES8')
    // for (var i = 0; i < iterations; i++)
    //   sortPropsByValue1(unordered, 'name', { reverse: true })
    // console.timeEnd('ES8')

    console.time('ES10')
    for (var i = 0; i < iterations; i++)
      sortPropsByValue(unordered, 'name', { reverse: true })
    console.timeEnd('ES10')
  })
})

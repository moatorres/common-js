import sortProps from './sort-props'

let original = {
  id: 1,
  name: 'marcio',
  age: 25,
  address: '5h avenue',
}

describe('sortProps()', () => {
  it('Should be defined', () => {
    expect(sortProps).toBeDefined()
  })

  it("Should sort an object's properties by its names", () => {
    let res = sortProps(original)
    let expected = {
      address: '5h avenue',
      age: 25,
      id: 1,
      name: 'marcio',
    }
    expect(JSON.stringify(res) === JSON.stringify(expected)).toBeTrue()
  })

  it("Should accept 'option.reverse' as its second argument", () => {
    let res = sortProps(original, { reverse: true })
    let reversed = {
      name: 'marcio',
      id: 1,
      age: 25,
      address: '5h avenue',
    }
    expect(JSON.stringify(res) === JSON.stringify(reversed)).toBeTrue()
  })

  it('Should sort (1) indices numerically, (2) string keys, and then (3) symbols', () => {
    let res = sortProps({
      1: 'first',
      [Symbol.for('a')]: 'symbolic',
      10: 'tenth',
      quote: 'order is important',
      name: 'bazzinga',
    })

    let expected = {
      1: 'first',
      10: 'tenth',
      name: 'bazzinga',
      quote: 'order is important',
      [Symbol.for('a')]: 'symbolic',
    }

    expect(JSON.stringify(res) === JSON.stringify(expected)).toBeTrue()
  })
})

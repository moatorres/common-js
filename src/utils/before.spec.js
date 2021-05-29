import before from './before'

describe('Utilities before()', () => {
  it('Should restrict calls to `fn`', () => {
    let arr = []
    let myFn = () => arr.push(1)
    let execMyFn = before(4, myFn)
    execMyFn() // [ 1 ]
    execMyFn() // [ 1, 1 ]
    execMyFn() // [ 1, 1, 1 ]
    execMyFn() // arr = [ 1, 1, 1 ]
    execMyFn() // arr = [ 1, 1, 1 ]
    execMyFn() // arr = [ 1, 1, 1 ]

    expect(arr.length).toEqual(3)
  })
})

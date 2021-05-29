import after from './after'

describe('Utilities after()', () => {
  it('Should restrict calls to `fn`', () => {
    let arr = []
    let myFn = () => arr.push(1)
    let execMyFn = after(4, myFn)
    execMyFn() // []
    execMyFn() // []
    execMyFn() // []
    execMyFn() // arr = [ 1 ]
    execMyFn() // arr = [ 1, 1 ]
    execMyFn() // arr = [ 1, 1, 1 ]

    expect(arr.length).toEqual(3)
  })
})

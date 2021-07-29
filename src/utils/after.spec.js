// @ts-nocheck
import after from './after'

describe('after()', () => {
  it('Should be defined', () => {
    expect(after).toBeDefined()
  })

  it('Should only execute on the "nth" call to `fn`', () => {
    let arr = []

    let click = () => arr.push(1)

    let doClick = after(4, click)

    doClick() // 1st click => []
    doClick() // 2nd click => []
    doClick() // 3rd click => []
    doClick() // 4th click => [ 1 ] // → first execution :: after(4, arr.push(1))
    doClick() // 5th click => [ 1, 1 ]
    doClick() // 6th click => [ 1, 1, 1 ]
    doClick() // 7th click => [ 1, 1, 1, 1 ]

    console.log(arr)
    expect(arr.length).toEqual(4) // => [ 1, 1, 1, 1 ]
  })
})

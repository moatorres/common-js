import concat from './concat'

describe('concat()', () => {
  it('Should be defined', () => {
    expect(concat).toBeDefined()
  })

  it('Should concatenate two arrays', () => {
    let a = [1, 2, 3]
    let b = [4, 5, 6]
    let res = concat(a, b)

    expect(res).toMatchSnapshot()
    expect(res).toIncludeAllMembers(a)
    expect(res).toIncludeAllMembers(b)
  })

  it('Should be able to concatenate two strings', () => {
    let a = 'Hey, '
    let b = 'buddy!'

    // @ts-ignore
    let res = concat(a, b).join('')
    expect(res).toEqual('Hey, buddy!')
  })
})

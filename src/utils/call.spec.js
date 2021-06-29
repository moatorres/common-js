import call from './call'

describe('call()', () => {
  it('Should be defined', () => {
    expect(call).toBeDefined()
  })

  it('Should accept two arguments: a function and any value', () => {
    let notFunction = 'double'

    // @ts-ignore
    expect(() => call(notFunction)).toThrowError(TypeError)
    // @ts-ignore
    expect(() => call(notFunction, 33)).toThrowError(TypeError)
  })

  it('Should successfully call the received function over the received value', () => {
    let double = (x) => x * 2
    let concat = (a) => (b) => a.concat(b)

    expect(call(double, 33)).toEqual(66)
    expect(call(concat, [1, 2])(3)).toEqual([1, 2, 3])
  })
})

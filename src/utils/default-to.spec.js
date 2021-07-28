import defaultTo from './default-to'

describe('defaultTo()', () => {
  it('Should be defined', () => {
    expect(defaultTo).toBeDefined()
  })

  it('Should default to receveid value of N type', () => {
    let minimo = defaultTo(20) // if null, pass 20
    let res = minimo(null)
    expect(res).toEqual(20)
  })
})

import callAll from './call-all'

describe('callAll()', () => {
  it('Should be defined', () => {
    expect(callAll).toBeDefined()
  })

  it('Should call all functions that are received', () => {
    let f1 = jest.fn()
    let f2 = jest.fn()
    let f3 = jest.fn()

    let everyoneOnce = () => callAll(f1, f2, f3)()
    let F1Twice = () => callAll(f1, f1)()

    everyoneOnce()
    F1Twice()

    expect(f1).toHaveBeenCalledTimes(3)
    expect(f2).toHaveBeenCalledTimes(1)
    expect(f3).toHaveBeenCalledTimes(1)
  })
})

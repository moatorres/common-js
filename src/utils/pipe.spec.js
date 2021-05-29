import pipe from './pipe'

const divide = (value) => value / 4
const print = (value) => 'Resultado: ' + value
const double = async (a) => a * 2
const triple = async (a) => Promise.resolve(a * 3)

describe('pipe()', () => {
  it('Should work with synchronous functions', () => {
    const divideAndPrintSync = pipe(divide, print)
    const res = divideAndPrintSync(12)
    expect(res).toEqual('Resultado: 3')
  })

  it('Should work with asynchronous functions', async () => {
    const doubleTripleAsync = pipe(double, triple)
    const res = await doubleTripleAsync(12)
    expect(res).toBe(72)
  })

  it('Should work with both synchronous and asynchronous functions', async () => {
    const mixedSyncAsync = pipe(double, triple, divide, print)
    const res = await mixedSyncAsync(12)
    expect(res).toBe('Resultado: 18')

    let stringReplaced = res.replace('18', 'A-ha')
    expect(stringReplaced).toBe('Resultado: A-ha')
  })
})

import { Delay } from './Delay'

describe('Delay Class', () => {
  it('.ms() should be defined', async () => {
    expect(Delay.ms).toBeDefined()
  })

  it('Should delay its execution', async () => {
    let foo
    await Delay.ms(2000).then((v) => (foo = true))
    expect(foo).toBeDefined()
  })
})

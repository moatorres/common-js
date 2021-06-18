import fluent from './fluent'

class Testar {
  constructor(props) {
    this.props = props
  }

  isFluent() {
    this.props + ' concatenado'
  }
  finish() {
    return console.log(this.isFluent())
  }
}

describe('fluent()', () => {
  it('Should be defined', () => {
    expect(fluent).toBeDefined()
  })

  it("Should turn a function's method into a fluent-style method", () => {
    Testar.prototype.finish = fluent(Testar.prototype.finish)
    Testar.prototype.isFluent = fluent(Testar.prototype.isFluent)

    let testando = () =>
      // @ts-ignore
      new Testar('Moka').finish().isFluent().finish().isFluent()

    expect(() => testando()).not.toThrow()
  })
})

import { makeEnderecoFactory, EnderecoBuilder } from './user-endereco'

let builder = EnderecoBuilder()
let factory = makeEnderecoFactory()

describe('Endereco Builder', () => {
  it('Method .build() should be defined', () => {
    expect(typeof builder.build === 'function').toBeTruthy()
    expect(builder.build).toBeDefined()
  })

  it('Method .build() should throw if any arguments are missing', () => {
    const builderOne = EnderecoBuilder()
    expect(() => builderOne.setBairro('Moka').build()).toThrow()

    const builderTwo = EnderecoBuilder()
    expect(() =>
      builderTwo.setBairro('Moka').setCidade('Moka').build()
    ).toThrow()

    const builderThree = EnderecoBuilder()
    expect(() => builderThree.setEstado('Moka').build()).toThrow()
  })

  it('Method .build() should not allow values to be set after the object is built', () => {
    const endereco = builder
      .setBairro('Casa Forte')
      .setCidade('Recife')
      .setEstado('Pernambuco')
      .build()

    expect(() => (endereco.bairro = 'flans')).toThrow()
    expect(() => (endereco.cidade = 'flensk')).toThrow()
    expect(() => (endereco.estado = 'flensk')).toThrow()

    const builderThree = EnderecoBuilder()

    expect(() =>
      builderThree
        .setBairro('Casa Forte')
        .setCidade('Recife')
        .setEstado('Pernambuco')
        .build()
        .setCidade('Salvador')
    ).toThrow()

    expect(() =>
      builderThree
        .setBairro('Tamarineira')
        .setCidade('Recife')
        .setEstado('PE')
        .build()
        .setBairro('Pina')
    ).toThrow()
  })

  it('Methods .setBairro() .setCidade() .setEstado() should be defined', () => {
    expect(typeof builder.setBairro === 'function').toBeTruthy()
    expect(builder.setBairro).toBeDefined()

    expect(typeof builder.setCidade === 'function').toBeTruthy()
    expect(builder.setCidade).toBeDefined()

    expect(typeof builder.setEstado === 'function').toBeTruthy()
    expect(builder.setEstado).toBeDefined()
  })
})

describe('Endereco Factory', () => {
  it('Method .create() should be defined', () => {
    expect(typeof factory.create === 'function').toBeTruthy()
    expect(factory.create).toBeDefined()
  })

  it('Method .create() should throw with wrong or missing parameters', () => {
    // @ts-ignore
    expect(() => factory.create()).toThrow()
    // @ts-ignore
    expect(() => factory.create({})).toThrow()
    // @ts-ignore
    expect(() => factory.create({ bairro: 'Pina', cidade: 'Recife' })).toThrow()
    expect(() =>
      // @ts-ignore
      factory.create({ cep: '50050-110', cidade: 'Recife' })
    ).toThrow()
  })

  it('Method .create() should throw when supplied with invalid values', () => {
    expect(() =>
      // @ts-ignore
      factory.create({ bairro: 1, cidade: 'Imaginária', estado: 'Unido' })
    ).toThrow()
    expect(() =>
      // @ts-ignore
      factory.create({ bairro: 'Candeias', cidade: 10, estado: 'Pernambuco' })
    ).toThrow()
    expect(() =>
      // @ts-ignore
      factory.create({ bairro: 'Pina', cidade: 'Recife', estado: 100 })
    ).toThrow()

    expect(() =>
      factory.create({
        bairro: 'Janga',
        cidade: 'Olinda',
        estado: 'Pernambuco',
      })
    ).not.toThrow()
  })

  it('Should not allow methods to be overriden', () => {
    expect(factory).toBeFrozen()
  })

  it('Should return a new Endereco with valid values', () => {
    const endereco = factory.create({
      bairro: 'Centro',
      cidade: 'Recife',
      estado: 'Pernambuco',
    })

    expect(endereco.bairro).toEqual('Centro')
    expect(endereco.cidade).toEqual('Recife')
    expect(endereco.estado).toEqual('Pernambuco')
  })

  it('Should not allow values to be overriden', () => {
    const endereco = factory.create({
      bairro: 'Centro',
      cidade: 'Recife',
      estado: 'Pernambuco',
    })

    expect(() => (endereco.bairro = 'Boom')).toThrow()
    expect(() => (endereco.cidade = 'Boom')).toThrow()
    // @ts-ignore
    expect(() => (endereco.pernambuco = 'Boom')).toThrow()

    expect(endereco).toBeFrozen()
  })
})

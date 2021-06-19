import { makeUserNomeFactory, UserNomeBuilder } from './user-nome'

let builder, factory

beforeEach(() => {
  builder = UserNomeBuilder()
  factory = makeUserNomeFactory()
})

describe('UserNome Builder', () => {
  it('Should have ".setNome()" and ".setSobrenome()" methods', () => {
    expect(typeof builder.setNome === 'function').toBeTruthy()
    expect(builder.setNome).toBeDefined()

    expect(typeof builder.setSobrenome === 'function').toBeTruthy()
    expect(builder.setSobrenome).toBeDefined()
  })

  it('Should have a ".build()" method', () => {
    expect(typeof builder.build === 'function').toBeTruthy()
    expect(builder.build).toBeDefined()
  })

  it('Should not build if both "nome" and "sobrenome" are not provided', () => {
    const builderOne = UserNomeBuilder()
    // @ts-ignore
    expect(() => builderOne.setNome('Moka').build()).toThrow()

    const builderTwo = UserNomeBuilder()
    // @ts-ignore
    expect(() => builderTwo.setSobrenome('Moka').build()).toThrow()
  })

  it('Should not allow "nome" ou "sobrenome" to be set after the object is built', () => {
    const user = builder.setNome('Floka').setSobrenome('Soka').build()
    expect(() => (user.primeiro_nome = 'flans')).toThrow()
    expect(() => (user.ultimo_nome = 'flensk')).toThrow()

    expect(() =>
      builder.setNome('Floka').setSobrenome('Soka').build().setNome('flans')
    ).toThrow()

    expect(() =>
      builder
        .setNome('Floka')
        .setSobrenome('Soka')
        .build()
        .setSobrenome('flensk')
    ).toThrow()
  })
})

describe('UserNome Factory', () => {
  it('Should have a ".create()" method of type "function"', () => {
    expect(typeof factory.create === 'function').toBeTruthy()
    expect(factory.create).toBeDefined()
  })

  it('Should not allow the factory methods to be overriden', () => {
    expect(factory).toBeFrozen()
  })

  it('Should throw when ".create()" method is called with wrong or missing parameters', () => {
    expect(() => factory.create()).toThrow()
    expect(() => factory.create({})).toThrow()
    expect(() => factory.create({ nome: 'Dada' })).toThrow()
    expect(() => factory.create({ flan: 'Dada', pan: 'Jaja' })).toThrow()
  })

  it('Should throw if supplied invalid "nome" or "sobrenome"', () => {
    expect(() => factory.create({ nome: 1, sobrenome: 'm' })).toThrow()
    expect(() => factory.create({ nome: 'Moka', sobrenome: 1 })).toThrow()
    expect(() => factory.create({ nome: 'M', sobrenome: 'F' })).toThrow()

    expect(() =>
      factory.create({ nome: 'Moka', sobrenome: 'Floka' })
    ).not.toThrow()
  })

  it('Should return an object when an "primeiro_nome" and "ultimo_nome" values', () => {
    const user = factory.create({ nome: 'Moka', sobrenome: 'Floca' })

    expect(user.primeiro_nome).toEqual('Moka')
    expect(user.ultimo_nome).toEqual('Floca')
  })

  it('Should not allow "primeiro_nome" or "ultimo_nome" to be overriden', () => {
    const user = factory.create({ nome: 'Moka', sobrenome: 'Floca' })

    expect(user).toBeFrozen()
    expect(() => (user.primeiro_nome = 'fla')).toThrow()
    expect(() => (user.ultimo_nome = 'fla')).toThrow()
  })
})

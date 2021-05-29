import { makeCPFFactory, CPFBuilder } from './user-cpf'

let builder = CPFBuilder()
let factory = makeCPFFactory()

describe('CPF Builder', () => {
  it('Method .build() should be defined', () => {
    expect(typeof builder.build === 'function').toBeTruthy()
    expect(builder.build).toBeDefined()
  })

  it('Method .build() should throw if provided an invalid value', () => {
    const builderOne = CPFBuilder()
    // @ts-ignore
    expect(() => builderOne.setCPF().build()).toThrow()
  })

  it('Method .setCPF() should be defined', () => {
    expect(typeof builder.setCPF === 'function').toBeTruthy()
    expect(builder.setCPF).toBeDefined()
  })

  it('Should not allow values to be set after the object is built', () => {
    const objeto = builder.setCPF('111.111.111-11').build()
    expect(objeto).toBeFrozen()
    expect(() => (objeto.cpf = '222.222.222-22')).toThrow()
    const novoBuilder = CPFBuilder()
    expect(() =>
      novoBuilder.setCPF('333.333.333-33').build().setCPF('444.444.444-44')
    ).toThrow()
  })
})

describe('CPF Factory', () => {
  it('Method .create() should be defined', () => {
    expect(typeof factory.create === 'function').toBeTruthy()
    expect(factory.create).toBeDefined()
  })

  it('Method .create() should not execute missing parameters', () => {
    // @ts-ignore
    expect(() => factory.create()).toThrow()
    // @ts-ignore
    expect(() => factory.create({})).toThrow()
  })

  it('Should not allow methods to be overriden', () => {
    expect(factory).toBeFrozen()
  })

  it('Should throw if supplied invalid values', () => {
    // @ts-ignore
    expect(() => factory.create({ cpf: 1 })).toThrow()
    // @ts-ignore
    expect(() => factory.create({ cpf: '555.555.555.55' })).toThrow()
    // @ts-ignore
    expect(() => factory.create({ cep: '50050-140' })).toThrow()
  })

  it('Should return an object a valid .cpf value', () => {
    const objeto = factory.create({ cpf: '777.777.777-77' })
    expect(objeto.cpf).toEqual('777.777.777-77')
  })

  it('Should not allow values to be overriden', () => {
    const objeto = factory.create({ cpf: '888.888.888-88' })

    expect(objeto).toBeFrozen()
    expect(() => (objeto.cpf = '999.999.999-99')).toThrow()
  })
})

import {
  DadosBancariosBuilder,
  makeDadosBancariosFactory,
} from './user-dados-bancarios'

let builder = DadosBancariosBuilder()
let factory = makeDadosBancariosFactory()

describe('DadosBancarios Builder', () => {
  it('Method .build() should be defined', () => {
    expect(typeof builder.build === 'function').toBeTruthy()
    expect(builder.build).toBeDefined()
  })

  it('Method .build() should throw with missing or invalid values', () => {
    expect(() => builder.setBanco('Bradesco').build()).toThrow()
    expect(() =>
      builder
        .setBanco('Bradesco')
        .setAgencia(4003)
        .setTipo('conta corrente')
        .build()
    ).toThrow()
  })

  it('Method .build() should not allow values to be set after the object is built', () => {
    const dados = builder
      .setBanco('004')
      .setAgencia('4003')
      .setTipo('conta corrente')
      .setConta('126123-51')
      .build()

    expect(() => (dados.banco = 'Bradesco')).toThrow()
    expect(() => (dados.agencia = '4009')).toThrow()
    expect(() => (dados.tipo_de_conta = 'conta corrente')).toThrow()
    expect(() => (dados.numero_da_conta = '01593-0')).toThrow()

    const builderTwo = DadosBancariosBuilder()

    expect(() =>
      builderTwo
        .setBanco('004')
        .setAgencia('4003')
        .setTipo('conta corrente')
        .setConta('126123-51')
        .build()
        .setAgencia('001')
    ).toThrow()
  })

  it('Methods .setBanco() .setAgencia() .setTipo() .setConta() should be defined', () => {
    expect(typeof builder.setBanco === 'function').toBeTruthy()
    expect(builder.setBanco).toBeDefined()

    expect(typeof builder.setAgencia === 'function').toBeTruthy()
    expect(builder.setAgencia).toBeDefined()

    expect(typeof builder.setTipo === 'function').toBeTruthy()
    expect(builder.setTipo).toBeDefined()

    expect(typeof builder.setConta === 'function').toBeTruthy()
    expect(builder.setConta).toBeDefined()
  })
})

describe('DadosBancarios Factory', () => {
  it('Method .create() should be defined', () => {
    expect(typeof factory.create === 'function').toBeTruthy()
    expect(factory.create).toBeDefined()
  })

  it('Method .create() should throw with wrong or missing parameters', () => {
    // @ts-ignore
    expect(() => factory.create()).toThrow()
    // @ts-ignore
    expect(() => factory.create({})).toThrow()

    expect(() =>
      factory.create({
        banco: '001',
        agencia: '1712',
        // @ts-ignore
        tipo: 'conta corrente',
      })
    ).toThrow()

    expect(() =>
      factory.create({
        banco: '433',
        agencia: '5201',
        tipo: 'conta poupança',
        // @ts-ignore
        numeroDaConta: 4004,
      })
    ).toThrow()
  })

  it('Method .create() should throw if provided invalid values', () => {
    expect(() =>
      factory.create({
        // @ts-ignore
        banco: 1,
        agencia: 'Imaginária',
        tipo_de_conta: 'Unido',
      })
    ).toThrow()
    expect(() =>
      factory.create({
        banco: 'Candeias',
        // @ts-ignore
        agencia: 10,
        tipo_de_conta: 'Pernambuco',
      })
    ).toThrow()
    expect(() =>
      factory.create({
        banco: 'Pina',
        agencia: 'Recife',
        // @ts-ignore
        tipo_de_conta: 100,
      })
    ).toThrow()

    expect(() =>
      factory.create({
        banco: '001',
        agencia: '2020',
        tipoDeConta: 'conta corrente',
        numeroDaConta: '50021-5',
      })
    ).not.toThrow()
  })

  it('Should not allow methods to be overriden', () => {
    expect(factory).toBeFrozen()
  })

  it('Should return a DadosBancarios object with valid values', () => {
    const dados = factory.create({
      banco: '001',
      agencia: '2020',
      tipoDeConta: 'conta corrente',
      numeroDaConta: '50021-5',
    })

    expect(dados.banco).toEqual('001')
    expect(dados.agencia).toEqual('2020')
    expect(dados.tipo_de_conta).toEqual('conta corrente')
    expect(dados.numero_da_conta).toEqual('50021-5')
  })

  it('Should not allow values to be overriden', () => {
    const dados = factory.create({
      banco: '001',
      agencia: '2020',
      tipoDeConta: 'conta corrente',
      numeroDaConta: '50021-5',
    })

    expect(() => (dados.banco = 'Boom')).toThrow()
    expect(() => (dados.agencia = 'Boom')).toThrow()
    expect(() => (dados.tipo_de_conta = '')).toThrow()
    expect(() => (dados.numero_da_conta = '01234-5')).toThrow()
    // @ts-ignore
    expect(() => (dados.campo_invalido = () => {})).toThrow()

    expect(dados).toBeFrozen()
  })
})

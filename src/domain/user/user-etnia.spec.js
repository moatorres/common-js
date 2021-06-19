import { makeEtniaFactory, EtniaBuilder, etniaDefault } from './user-etnia'

let builder = EtniaBuilder()
let factory = makeEtniaFactory()

describe('Etnia Builder', () => {
  it('Method .build() should be defined', () => {
    expect(typeof builder.build === 'function').toBeTruthy()
    expect(builder.build).toBeDefined()
  })

  it('Method .build() should set default value when no values are provided', () => {
    let builder = EtniaBuilder()
    expect(() => builder.setEtnia().build()).not.toThrow()

    let objeto = builder.setEtnia().build()
    expect(objeto.etnia).toEqual(etniaDefault)
  })

  it('Method .setEtnia() should be defined', () => {
    expect(typeof builder.setEtnia === 'function').toBeTruthy()
    expect(builder.setEtnia).toBeDefined()
  })

  it('Should not allow values to be set after the object is built', () => {
    let objeto = builder.setEtnia().build()
    expect(() => (objeto.etnia = 'branca')).toThrow()

    let freshBuilder = EtniaBuilder()
    expect(() =>
      // @ts-ignore
      freshBuilder.setEtnia('preta').build().setEtnia('branca')
    ).toThrow()
  })
})

describe('Etnia Factory', () => {
  it('Method .create() should be defined', () => {
    expect(typeof factory.create === 'function').toBeTruthy()
    expect(factory.create).toBeDefined()
  })

  it('Method .create() should not execute with invalid arguments or values', () => {
    // @ts-ignore
    expect(() => factory.create({ etnia: '50050-140' })).toThrow()

    let freshFactory = makeEtniaFactory()
    // @ts-ignore
    expect(() => freshFactory.create({ cpf: 'indígena' })).toThrow()
  })

  it('Method .create() should not execute with wrong or missing parameters', () => {
    // @ts-ignore
    expect(() => factory.create()).toThrow()
    // @ts-ignore
    expect(() => factory.create({})).toThrow()
    // @ts-ignore
    expect(() => factory.create({ cpf: 1 })).toThrow()
    // @ts-ignore
    expect(() => factory.create({ cep: '50050-140' })).toThrow()
  })

  it('Should not allow methods to be overriden', () => {
    expect(factory).toBeFrozen()
  })

  it('Should throw if supplied an invalid "etnia" value', () => {
    // @ts-ignore
    expect(() => factory.create({ etnia: 1 })).toThrow()
    // @ts-ignore
    expect(() => factory.create({ etnia: 'rosa' })).toThrow()
    // @ts-ignore
    expect(() => factory.create({ etnia: 'parda' })).not.toThrow()
  })

  it('Should return an object a valid .etnia value', () => {
    let objeto = factory.create({ etnia: 'amarela' })
    expect(objeto.etnia).toEqual('amarela')
  })

  it('Should not allow values to be overriden', () => {
    let objeto = factory.create({ etnia: 'preta' })
    expect(objeto).toBeFrozen()
    expect(() => (objeto.etnia = 'branca')).toThrow()
  })
})

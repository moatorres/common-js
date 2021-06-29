import { makeCPF, CPFBuilder } from './user-cpf'

let builder = CPFBuilder()
let factory = makeCPF()

describe('CPF Builder', () => {
  describe('.setCPF()', () => {
    it('Should be defined', () => {
      expect(typeof builder.setCPF === 'function').toBeTruthy()
      expect(builder.setCPF).toBeDefined()
    })

    it('Should not allow values to be set after the object is built', () => {
      const objeto = builder.setCPF('111.111.111-11').build()
      expect(objeto).toBeFrozen()

      expect(() => (objeto.cpf = '222.222.222-22')).toThrow()

      expect(() =>
        builder.setCPF('333.333.333-33').build().setCPF('444.444.444-44')
      ).toThrow()
    })
  })

  describe('.build()', () => {
    it('Should be defined', () => {
      expect(typeof builder.build === 'function').toBeTruthy()
      expect(builder.build).toBeDefined()
    })

    it('Should throw if provided an invalid value', () => {
      const builderOne = CPFBuilder()
      // @ts-ignore
      expect(() => builderOne.setCPF().build()).toThrow()
    })
  })
})

describe('CPF Factory', () => {
  it('Should not allow methods to be overriden', () => {
    expect(factory).toBeFrozen()
  })

  it('Should not allow set values to be overriden', () => {
    const objeto = factory.create({ cpf: '888.888.888-88' })

    expect(objeto).toBeFrozen()
    // @ts-ignore
    expect(() => (objeto.cpf = '999.999.999-99')).toThrow()
  })

  describe('.create()', () => {
    it('Should be defined', () => {
      expect(typeof factory.create === 'function').toBeTruthy()
      expect(factory.create).toBeDefined()
    })

    it('Should not execute missing parameters', () => {
      // @ts-ignore
      expect(() => factory.create()).toThrow()
      // @ts-ignore
      expect(() => factory.create({})).toThrow()
    })

    it('Should throw if supplied invalid values', () => {
      expect(() => factory.create({ cpf: 1 })).toThrow()
      expect(() => factory.create({ cpf: '555.555.555.55' })).toThrow()
      // @ts-ignore
      expect(() => factory.create({ cep: '50050-140' })).toThrow()
    })

    it('Should return an object a valid "cpf" value', () => {
      const objeto = factory.create({ cpf: '777.777.777-77' })
      // @ts-ignore
      expect(objeto.cpf).toEqual('777.777.777-77')
    })
  })
})

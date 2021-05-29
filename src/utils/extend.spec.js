import extend from './extend'

const objetoInicial = { nome: 'Moka' }
const objetoAdicionado = {
  idade: 33,
  endereco: { rua: 'avenida' },
  contatos: [{ telefone: '123' }, { email: 'moka@moka.com' }],
}
const objetoFinal = extend(objetoInicial, objetoAdicionado)

describe('extend()', () => {
  it('Should extend the original object with properties of the other object', () => {
    expect(objetoFinal.endereco).toBeDefined()
  })

  it('Should extend the original object with nested properties of the other object', () => {
    expect(objetoFinal.endereco.rua).toEqual('avenida')
    expect(objetoFinal.contatos.length).toEqual(2)
  })
})

import { makeReadOnly, isString } from '../../utils'

const Endereco = ({ bairro, cidade, estado }) => ({ bairro, cidade, estado })

export const EnderecoBuilder = function () {
  return {
    setBairro: function (bairro) {
      const valido = isString(bairro)
      if (!valido) throw new Error('Bairro inválido (EnderecoBuilder)')

      this.bairro = bairro
      return this
    },
    setCidade: function (cidade) {
      const valido = isString(cidade)
      if (!valido) throw new Error('Cidade inválida (EnderecoBuilder)')

      this.cidade = cidade
      return this
    },
    setEstado: function (estado) {
      const valido = isString(estado)
      if (!valido) throw new Error('Estado inválido (EnderecoBuilder)')

      this.estado = estado
      return this
    },
    build: function () {
      if (!this.bairro)
        throw new Error('Você deve inserir um bairro (EnderecoBuilder)')

      if (!this.cidade)
        throw new Error('Você deve inserir um cidade (EnderecoBuilder)')

      if (!this.estado)
        throw new Error('Você deve inserir um estado (EnderecoBuilder)')

      return makeReadOnly(
        Endereco({
          bairro: this.bairro,
          cidade: this.cidade,
          estado: this.estado,
        })
      )
    },
  }
}

export const makeEnderecoFactory = function () {
  return makeReadOnly({
    create: ({ bairro, cidade, estado }) => {
      if (!bairro || !cidade || !estado)
        throw new Error(
          'Você deve inserir bairro, cidade e estado (makeEnderecoFactory)'
        )

      if (!isString(bairro))
        throw new Error('Bairro inválido (makeEnderecoFactory)')
      if (!isString(cidade))
        throw new Error('Cidade inválida (makeEnderecoFactory)')
      if (!isString(estado))
        throw new Error('Estado inválido (makeEnderecoFactory)')

      return makeReadOnly(Endereco({ bairro, cidade, estado }))
    },
  })
}

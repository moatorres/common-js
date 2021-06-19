import { makeReadOnly, isString } from '../../utils'

const dadosBancarios = ({ banco, agencia, tipoDeConta, numeroDaConta }) => ({
  banco,
  agencia,
  tipo_de_conta: tipoDeConta,
  numero_da_conta: numeroDaConta,
})

export const DadosBancariosBuilder = function () {
  return {
    setBanco: function (banco) {
      const valido = isString(banco)
      if (!valido)
        throw new Error('Dados do banco inválidos (DadosBancariosBuilder)')

      this.banco = banco
      return this
    },
    setAgencia: function (agencia) {
      const valido = isString(agencia)
      if (!valido)
        throw new Error('Dados da agência inválidos (DadosBancariosBuilder)')

      this.agencia = agencia
      return this
    },
    setTipo: function (tipoDeConta) {
      const valido =
        isString(tipoDeConta) &&
        ['conta corrente', 'conta poupanca'].includes(tipoDeConta)

      if (!valido)
        throw new Error('Tipo de conta inválido (DadosBancariosBuilder)')

      this.tipo_de_conta = tipoDeConta
      return this
    },
    setConta: function (numeroDaConta) {
      const valido = isString(numeroDaConta)
      if (!valido)
        throw new Error('Número de conta inválido (DadosBancariosBuilder)')

      this.numero_da_conta = numeroDaConta
      return this
    },
    build: function () {
      if (!this.banco)
        throw new Error(
          'Você deve inserir um banco válido (DadosBancariosBuilder)'
        )

      if (!this.agencia)
        throw new Error(
          'Você deve inserir uma agência válida (DadosBancariosBuilder)'
        )

      if (!this.tipo_de_conta)
        throw new Error(
          'Você deve inserir um tipo de conta válido (DadosBancariosBuilder)'
        )

      if (!this.numero_da_conta)
        throw new Error(
          'Você deve inserir um número de conta válido (DadosBancariosBuilder)'
        )

      return makeReadOnly(
        dadosBancarios({
          banco: this.banco,
          agencia: this.agencia,
          tipoDeConta: this.tipo_de_conta,
          numeroDaConta: this.numero_da_conta,
        })
      )
    },
  }
}

export const makeDadosBancariosFactory = () => {
  return makeReadOnly({
    create: ({ banco, agencia, tipoDeConta, numeroDaConta }) => {
      if (!banco || !agencia || !tipoDeConta || !numeroDaConta)
        throw new Error(
          'Você deve inserir banco, agencia, tipoDeConta e numeroDaConta(makeDadosBancariosFactory)'
        )

      if (!isString(banco))
        throw new Error('Bairro inválido (makeDadosBancariosFactory)')
      if (!isString(agencia))
        throw new Error('Cidade inválida (makeDadosBancariosFactory)')
      if (!isString(tipoDeConta))
        throw new Error('Estado inválido (makeDadosBancariosFactory)')
      if (!isString(numeroDaConta))
        throw new Error('Estado inválido (makeDadosBancariosFactory)')

      return makeReadOnly(
        dadosBancarios({ banco, agencia, tipoDeConta, numeroDaConta })
      )
    },
  })
}

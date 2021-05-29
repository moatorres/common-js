import { regex, makeReadOnly } from '../../utils'

const cpfValido = (cpf) => typeof cpf === 'string' && regex.cpf.test(cpf)

const UserCPF = function ({ cpf }) {
  this.cpf = cpf
}

export const CPFBuilder = function () {
  return {
    setCPF: function (cpf) {
      const valido = cpfValido(cpf)
      if (!valido) throw new Error('CPF inválido (CPFBuilder)')

      this.cpf = cpf
      return this
    },
    build: function () {
      if (!this.cpf) {
        throw new Error('Você deve inserir um CPF válido (CPFBuilder)')
      }

      return makeReadOnly(new UserCPF({ cpf: this.cpf }))
    },
  }
}

export const makeCPFFactory = function () {
  return makeReadOnly({
    create: function ({ cpf }) {
      if (!cpf)
        throw new Error('Você deve inserir um CPF válido (makeCPFFactory)')

      if (!cpfValido(cpf)) throw new Error('CPF inválido (makeCPFFactory)')

      return makeReadOnly(new UserCPF({ cpf }))
    },
  })
}

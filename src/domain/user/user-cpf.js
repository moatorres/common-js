import { regex, makeReadOnly } from '../../utils'

const userCPF = ({ cpf }) => ({ cpf })

const cpfValido = (cpf) => cpf && typeof cpf === 'string' && regex.cpf.test(cpf)

export const CPFBuilder = () => {
  function setCPF(cpf) {
    const valido = cpfValido(cpf)
    if (!valido) throw new Error('CPF inválido (CPFBuilder)')

    this.cpf = cpf
    return this
  }

  function build() {
    if (!this.cpf) {
      throw new Error('Você deve inserir um CPF válido (CPFBuilder)')
    }

    return makeReadOnly(userCPF({ cpf: this.cpf }))
  }

  return {
    setCPF,
    build,
  }
}

export const makeCPF = () => {
  function create({ cpf }) {
    if (!cpfValido(cpf)) throw new Error('CPF inválido (makeCPF)')
    return makeReadOnly(userCPF({ cpf }))
  }

  return makeReadOnly({
    create,
  })
}

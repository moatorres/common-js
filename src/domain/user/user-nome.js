import { makeWordLengthRange } from '../../regex'
import { makeReadOnly, isString } from '../../utils'

const nomeRange = makeWordLengthRange(2, 30) // Number, Number → RegEx
const rangeValido = (i) => nomeRange.test(i) // String → Boolean
const nomeValido = (nome) => {
  if (!isString(nome)) return false
  return rangeValido(nome)
}

const UserNome = ({ nome, sobrenome }) => ({
  primeiro_nome: nome,
  ultimo_nome: sobrenome,
})

export const UserNomeBuilder = function () {
  return {
    setNome: function (nome) {
      const valido = nomeValido(nome)
      if (!valido) throw new Error('Nome inválido')

      this.nome = nome
      return this
    },
    setSobrenome: function (sobrenome) {
      const valido = nomeValido(sobrenome)
      if (!valido) throw new Error('Sobrenome inválido')

      this.sobrenome = sobrenome
      return this
    },
    build: function () {
      if (!this.nome) throw new Error('Você deve inserir um nome (setNome)')

      if (!this.sobrenome)
        throw new Error('Você deve inserir um sobrenome (setSobrenome)')

      return makeReadOnly(
        UserNome({
          nome: this.nome,
          sobrenome: this.sobrenome,
        })
      )
    },
  }
}

export const makeUserNomeFactory = function () {
  return makeReadOnly({
    create: ({ nome, sobrenome }) => {
      if (!nome || !sobrenome)
        throw new Error('Você deve inserir nome e sobrenome')

      if (!nomeValido(nome)) throw new Error('Nome inválido')
      if (!nomeValido(sobrenome)) throw new Error('Sobrenome inválido')
      return makeReadOnly(UserNome({ nome, sobrenome }))
    },
  })
}

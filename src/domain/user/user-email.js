import { RegexLib } from '../../regex/patterns'
import { makeReadOnly } from '../../utils'

const emailValido = (email) => RegexLib.Email.test(email)

const userEmail = ({ email }) => ({ email })

export const userEmailBuilder = function () {
  return {
    setEmail: function (email) {
      if (!email) throw new Error('Você deve inserir um email')
      if (!emailValido(email)) throw new Error('Email inválido')
      this.email = email
      return makeReadOnly(this)
    },
    build: function () {
      return makeReadOnly(userEmail({ email: this.email }))
    },
  }
}

export const makeUserEmailFactory = () => {
  return makeReadOnly({
    create: ({ email }) => {
      if (!email) throw new Error('Você deve inserir um email')
      if (!emailValido(email)) throw new Error('Email inválido')
      return makeReadOnly(userEmail({ email: email }))
    },
  })
}

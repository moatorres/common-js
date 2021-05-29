import { makeReadOnly } from '../utils'

const EmailVerificationToken = function ({ token, prazo }) {
  let _token = token
  let _prazo = prazo

  this.getValue = () => ({ token: _token, prazo: _prazo })
  this.getToken = () => _token
  this.getPrazo = () => _prazo

  this.isExpired = function () {
    const agora = new Date()
    return agora > _prazo
  }

  this.isValid = (code) =>
    _token.toUpperCase() === code.toUpperCase() && !this.isExpired()

  this.toJSON = () => {
    return JSON.stringify({
      token: _token,
      prazo: _prazo,
    })
  }

  this.toString = () => this.toJSON()
}

export function EmailVerificationTokenBuilder() {
  let digitos = 4 // export-config
  let prazoEmHoras = 6 // export-config

  function createToken(rawToken) {
    if (rawToken) {
      const props = JSON.parse(rawToken)

      return makeReadOnly(
        new EmailVerificationToken({
          ...props,
          prazo: new Date(props.prazo),
        })
      )
    }

    // random 4 character token
    const chars = '0123456789abcdefghijklmnopqrstuvwxyz'
    let token = ''

    for (let i = digitos; i > 0; --i) {
      token += chars[Math.round(Math.random() * (chars.length - 1))]
    }

    token = token.toUpperCase()

    // expiration date
    const expiraEm = new Date()
    expiraEm.setHours(expiraEm.getHours() + prazoEmHoras)

    return makeReadOnly(
      new EmailVerificationToken({
        token: token,
        prazo: expiraEm,
      })
    )
  }

  return makeReadOnly({ create: createToken })
}

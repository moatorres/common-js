import { makeReadOnly } from '../../utils'

const UserCookies = function ({
  essenciais = true,
  analytics = false,
  marketing = false,
} = {}) {
  this.essenciais = essenciais
  this.analytics = analytics
  this.marketing = marketing
  this.consentido_em = new Date().toISOString()
}

export const UserCookiesBuilder = function () {
  let props = {
    analytics: false,
    marketing: false,
  }

  const allowedProps = ['analytics', 'marketing']

  return {
    toggle: function (prop) {
      if (!allowedProps.includes(prop))
        throw new Error('Propriedade inválida (UserCookiesBuilder)')

      props[prop] = !props[prop]
      return this
    },
    build: function () {
      return makeReadOnly(new UserCookies(props))
    },
  }
}

import { makeReadOnly } from '../../utils'

const userCookies = ({
  essenciais = true,
  analytics = false,
  marketing = false,
}) => ({
  essenciais,
  analytics,
  marketing,
  consentido_em: new Date().toISOString(),
})

export const userCookiesBuilder = function () {
  let props = {
    analytics: false,
    marketing: false,
  }

  const allowedProps = ['analytics', 'marketing']

  return {
    toggle: function (prop) {
      if (!allowedProps.includes(prop))
        throw new Error('Propriedade inválida (userCookiesBuilder)')

      props[prop] = !props[prop]
      return this
    },
    build: function () {
      return makeReadOnly(userCookies(props))
    },
  }
}

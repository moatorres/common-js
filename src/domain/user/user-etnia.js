import { makeReadOnly } from '../../utils'

// export-config
export const etniaDefault = 'prefiro não informar' //
const etniaEnum = [
  'amarela',
  'branca',
  'indígena',
  'parda',
  'preta',
  etniaDefault,
]

const validarEtnia = (etnia) => etniaEnum.includes(etnia.trim())

const Etnia = ({ etnia }) => ({ etnia })

export const EtniaBuilder = function () {
  return {
    setEtnia: function (etnia) {
      if (!etnia) etnia = etniaDefault

      const etniaValida = validarEtnia(etnia)
      if (!etniaValida) throw new Error('Etnia inválida (EtniaBuilder)')

      this.etnia = etnia
      return this
    },
    build: function () {
      const etniaValida = validarEtnia(this.etnia)
      if (!etniaValida) throw new Error('Etnia inválida (EtniaBuilder)')

      return makeReadOnly(Etnia({ etnia: this.etnia }))
    },
  }
}

export const makeEtniaFactory = function () {
  return makeReadOnly({
    create: ({ etnia }) => {
      let _etnia = etnia ? etnia : etniaDefault
      const etniaValida = validarEtnia(etnia)

      if (!etniaValida) throw new Error('Etnia inválida (EtniaFactory)')

      return makeReadOnly(Etnia({ etnia: _etnia }))
    },
  })
}

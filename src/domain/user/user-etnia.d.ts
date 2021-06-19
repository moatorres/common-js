type Etnias =
  | 'amarela'
  | 'branca'
  | 'indígena'
  | 'parda'
  | 'preta'
  | 'prefiro não informar'

interface IEtnia {
  etnia: Etnias
}

interface IEtniaBuilder {
  setEtnia: (etnia?: Etnias) => IEtniaBuilder
  build: () => IEtnia
}

interface IEtniaFactory {
  create: ({}: IEtnia) => IEtnia
}

export function makeEtniaFactory(): IEtniaFactory
export function EtniaBuilder(): IEtniaBuilder
export const etniaDefault = 'prefiro não informar'

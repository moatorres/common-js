export interface Identifier {
  equals: (id: string | Identifier) => boolean
  toString: () => string
  toValue: () => string
}

interface UniqueID {
  create: (id?: string) => Identifier
}

export function makeIdFactory({ nanoid }: any): UniqueID

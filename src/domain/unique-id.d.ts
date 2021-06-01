export interface Identifier {
  equals: (id: Identifier) => boolean
  toString: () => string
  toValue: () => string
}

interface UniqueID {
  create: (id?: string) => Identifier
}

export function makeIdFactory({ nanoid }: any): UniqueID
export function makeIdentifier(props: string): Identifier

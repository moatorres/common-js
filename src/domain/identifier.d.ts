export interface Identifier {
  isEqual: (id: Identifier) => boolean
  toString: () => string
  toValue: () => string
}

export function makeIdentifier(id: string | number): Identifier

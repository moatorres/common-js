import { Identifier } from './identifier'

interface IUniqueID {
  create: (id?: string | number) => Identifier
}

export function makeIdFactory({ nanoid }: any): IUniqueID
export const makeId = () => IUniqueID

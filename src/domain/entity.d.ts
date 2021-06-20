import { Identifier } from './identifier'

export interface IEntity {
  props: object
  getId: () => Identifier
  equals: (objeto: object) => boolean
}

interface EntityAttrs {
  id?: Identifier
  props: object
}

export const makeEntity = ({ props, id }: EntityAttrs) => IEntity

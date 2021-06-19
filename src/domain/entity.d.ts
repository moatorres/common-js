import { Identifier } from './unique-id'

export interface IEntity {
  props: object
  getId: () => Identifier | string
  equals: (objeto: object) => boolean
}

interface EntityAttrs {
  id?: Identifier
  props: object
}

export const makeEntity = ({ props, id }: EntityAttrs) => IEntity

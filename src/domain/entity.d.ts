import { Identifier } from './identifier'
import { IValueObject } from './value-object'

export interface IEntity {
  id: Identifier
  props: object
  equals: (objeto: IEntity | EntityAttrs) => boolean
}

interface EntityAttrs {
  id?: Identifier
  props: IValueObject | object
}

export const makeEntity = ({ props, id }: EntityAttrs) => IEntity

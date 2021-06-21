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

function idHandler(id: any): Identifier
function isStringOrNumber(value: any): boolean

export const makeEntity = ({ props, id }: EntityAttrs) => IEntity

export interface ValueObjectProps {
  [index: string]: any
}

interface IValueObject {
  props: ValueObjectProps
  isEqual: (object: IValueObject | object) => boolean
}

export const makeValueObject = (props: ValueObjectProps) => IValueObject

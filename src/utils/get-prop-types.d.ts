interface ITypes {
  key: string
  type: string
  value?: T
}

interface IPropTypesAttrs {
  types: ITypes[]
}

export default function getPropTypes(
  obj: object,
  withValue?: boolean
): IPropTypesAttrs

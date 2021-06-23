type NotNullOrUndefined = string | number | boolean | symbol | object

interface IMatch {
  some: any
  none: any
}

interface ISome<T> {
  type: Symbol
  isSome: boolean
  isNone: boolean
  match: (fn: IMatch) => any
  map: (fn: Function) => ISome
  andThen: (fn: Function) => any
  and: (opt: any) => any
  unwrapOr: (opt: any) => string | number | boolean | symbol | object
  unwrap: () => string | number | boolean | symbol | object
  or: (opt: any) => ISome<T>
}

interface INone<T> {
  type: Symbol
  isSome: boolean
  isNone: boolean
  match: (fn: IMatch) => any
  map: (fn: any) => INone<T>
  andThen: (fn: any) => INone<T>
  and: (opt: any) => INone<T>
  unwrapOr: (def: NotNullOrUndefined) => NotNullOrUndefined | Error
  unwrap: () => ReferenceError
  or: (opt: any) => ISome<T>
}

export const OptionType = {
  Some: Symbol,
  None: Symbol,
}

export function Some<T>(val: T | null | undefined): ISome<T> | INone<T>
export function None<T>(val?: any): INone<T>

declare interface errorMap {
  0: string
  1: string
  2: string
}

declare const customError = (argName: string) => TypeError
declare const guard = (...args: Function[]) => TypeError | void 0

declare type Predicate = (fn: Function<T>) => boolean
declare type Execution = <T>(fn: Function<T>) => any

declare interface IfElseType {
  (predicate: Predicate, onTrue: Execution<T>, onFalse: Execution<T>):
    | TypeError
    | T
  any: IfElseType
  all: IfElseType
}

declare const ifElse: IfElseType

export default ifElse

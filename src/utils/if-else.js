import { typeError } from '../internal/error'
import isFunction from './is-function'

const errorMap = new Map([
  [0, 'predicate'],
  [1, 'onTrue'],
  [2, 'onFalse'],
])

const customError = (argName) =>
  typeError(argName + ' must be of type function (ifElse)')

const guard = (...args) =>
  args.map((v, i) => !isFunction(v) && customError(errorMap.get(i)))

const ifElse = (predicate, onTrue, onFalse) => (value) => {
  guard(predicate, onTrue, onFalse)
  return predicate(value) ? onTrue(value) : onFalse(value)
}

// prettier-ignore
const ifMulti = (type) => (predicate, onTrue, onFalse) => (...args) => {
  guard(predicate, onTrue, onFalse)
  return args[type](predicate)
    ? args.map(onTrue)
    : args.map(onFalse)
}

export default Object.assign(ifElse, {
  any: ifMulti('some'),
  all: ifMulti('every'),
})

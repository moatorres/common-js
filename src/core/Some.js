import {
  isEmptyString,
  isNumberZero,
  isFalse,
  isNullOrUndefined,
} from '../utils'

export const OptionType = {
  Some: Symbol(':some'),
  None: Symbol(':none'),
}

function isValid(value) {
  return (
    !!value ||
    isNumberZero(value) ||
    isFalse(value) ||
    isEmptyString(value) ||
    !isNullOrUndefined(value)
  )
}

const makeSome = (val) => ({
  type: OptionType.Some,
  isSome: () => true,
  isNone: () => false,
  match: (fn) => fn.some(val),
  map: (fn) => makeSome(fn(val)),
  andThen: (fn) => fn(val),
  and: (_) => _,
  unwrapOr: (_) => val,
  unwrap: () => val,
  or(_) {
    return this
  },
})

const makeNone = () => ({
  type: OptionType.None,
  isSome: () => false,
  isNone: () => true,
  or: (_) => _,
  map: (_) => makeNone(),
  andThen: (_) => makeNone(),
  and: (_) => makeNone(),
  match(matchObject) {
    const { none } = matchObject
    if (typeof none === 'function') {
      return none()
    }
    return none
  },
  unwrapOr(def) {
    if (!isValid(def)) {
      throw new Error('Cannot call unwrapOr with a missing value.')
    }
    return def
  },
  unwrap() {
    throw new ReferenceError('Trying to unwrap None.')
  },
})

export const Some = (val) => (isValid(val) ? makeSome(val) : makeNone())
export const None = (val) => makeNone(val)

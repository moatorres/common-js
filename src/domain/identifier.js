import { isFunction, isNullOrUndefined, makeReadOnly } from '../utils'

const Identifier = (value) => {
  let _value = value

  const toString = () => String(_value)
  const toValue = () => _value

  function isEqual(id) {
    if (isNullOrUndefined(id) || !isFunction(id.toValue)) return false
    return id.toValue() === _value
  }

  return makeReadOnly({
    isEqual,
    toString,
    toValue,
  })
}

export const makeIdentifier = (id) => Identifier(id)

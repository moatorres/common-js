import isArray from './is-array'
import isBoolean from './is-boolean'
import isNull from './is-null'
import isNumber from './is-number'
import isSymbol from './is-symbol'

const deepPropRegex = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/
const plainPropRegex = /^\w*$/

function isPropMatch(value) {
  return plainPropRegex.test(value) || !deepPropRegex.test(value)
}

function isValidKeyName(value, object) {
  if (isArray(value)) return false

  if (isNumber(value) || isBoolean(value) || isNull(value) || isSymbol(value))
    return true

  return isPropMatch(value) || (object != null && value in Object(object))
}

export default isValidKeyName

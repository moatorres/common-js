import pipe from './pipe'
import isEmptyString from './is-empty-string'
import isString from './is-string'
import isArray from './is-array'
import isNull from './is-null'
import isSymbol from './is-symbol'
import safeJSON from './safe-json'
import isMap from './is-map'
import isWeakMap from './is-weak-map'
import isSet from './is-set'
import isWeakSet from './is-weak-set'
import isObject from './is-object'
import { objectToString, mapToObject, setToArray } from '../internal'

const INFINITY = 1 / 0

const toString = (value) => {
  if (isEmptyString(value)) return ''
  if (isString(value)) return value
  if (isSet(value)) return toString(setToArray(value))
  if (isMap(value)) return toString(objectToString(mapToObject(value)))
  if (isObject(value)) return toString(objectToString(value))

  const removeFromStr = (char) => (v) => v.split(char).join('')
  const removeLeftBracket = removeFromStr('[')
  const removeRightBracket = removeFromStr(']')
  const removeAspas = removeFromStr('"')
  const formatOutput = pipe(removeLeftBracket, removeRightBracket, removeAspas)

  if (isArray(value))
    return formatOutput(
      safeJSON.stringify(
        value.flat(Infinity).map((v) => (isNull(v) ? v : toString(v)))
      )
    )

  if (isWeakSet(value)) return value.toString()
  if (isWeakMap(value)) return value.toString()
  if (isSymbol(value)) return value.toString()
  const result = `${value}`
  return result == '0' && 1 / value == -INFINITY ? '-0' : result
}

export default toString

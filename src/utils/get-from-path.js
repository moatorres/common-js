import isNull from './is-null'
import isString from './is-string'
import isSymbol from './is-symbol'
import isArray from './is-array'
import isKey from './is-key'
import stringToPath from './string-to-path'

function castPath(value, object) {
  return isArray(value)
    ? value
    : isKey(value, object)
    ? [value]
    : /* otherwise */ stringToPath(value)
}

const INFINITY = 1 / 0

function toKey(value) {
  if (isString(value) || isSymbol(value)) return value

  const result = `${value}`
  return result == '0' && 1 / value == -INFINITY ? '-0' : result
}

function getFromPath(object, path) {
  path = castPath(path, object)

  let index = 0
  const length = path.length

  while (!isNull(object) && index < length) {
    object = object[toKey(path[index++])]
  }

  return index && index == length ? object : undefined
}

export default getFromPath

import isArray from './is-array'

function isEmptyArray(value) {
  return isArray(value) && value.length === 0
}

export default isEmptyArray

import isEmptyString from './is-empty-string'
import isNumberZero from './is-number-zero'

function isEmptyObject(obj) {
  if (isEmptyString(obj)) return false
  if (isNumberZero(obj)) return false
  return obj && Object.keys(obj).length === 0 && obj.constructor === Object
}

export default isEmptyObject

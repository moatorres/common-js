import isEmptyString from './is-empty-string'
import isNumberZero from './is-number-zero'
import isFalse from './is-false'

export default function notNullOrUndefined(value) {
  if (isEmptyString(value)) return true
  if (isNumberZero(value)) return true
  if (isFalse(value)) return true
  if (!value) return false
  return typeof value !== null && typeof value !== undefined
}

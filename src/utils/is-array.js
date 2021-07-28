import { TypeTags } from '../internal/type-tags'
import getTag from './get-tag'

const _isArray = (value) =>
  value != null && value.length >= 0 && getTag(value) === TypeTags.Array

/**
 * Checks if `value` is an `Array` type.
 *
 * @param {*} value The `value` to check.
 * @returns {boolean} Returns `true` if `value` is an Array, else `false`.
 */
function isArray(value) {
  return Array.isArray ? Array.isArray(value) : _isArray(value)
}

export default isArray

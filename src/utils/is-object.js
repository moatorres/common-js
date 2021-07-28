import { TypeTags } from '../internal/type-tags'
import getTag from './get-tag'
import isArray from './is-array'
import isObjectLike from './is-object-like'

/**
 * Checks if `value` is the of type `Object`.
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * isObject({})
 * // => true
 *
 */
function isObject(value) {
  return (
    isObjectLike(value) && !isArray(value) && getTag(value) === TypeTags.Object
  )
}

export default isObject

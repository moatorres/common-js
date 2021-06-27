import getTag from './get-tag'

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
  const type = typeof value
  return (
    value != null &&
    type === 'object' &&
    !Array.isArray(value) &&
    getTag(value) === '[object Object]'
  )
}

export default isObject

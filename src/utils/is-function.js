import getTag from './get-tag'

/**
 * Checks if `value` is a `Function` type object.
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * isFunction(() => {})
 * // => true
 *
 * isFunction(Math.round)
 * // => true
 *
 * isFunction(/abc/)
 * // => false
 */
function isFunction(value) {
  return typeof value === 'function' && getTag(value) === '[object Function]'
}

export default isFunction

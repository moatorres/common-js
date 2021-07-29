/**
 * Checks if `value` is `undefined`.
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
 * @example
 *
 * isUndefined(null)
 * // => false
 *
 * isUndefined(void 0)
 * // => true
 */
function isUndefined(value) {
  return (
    typeof value === undefined ||
    (value == undefined && value !== null && value !== void 0) ||
    value === undefined
  )
}

export default isUndefined

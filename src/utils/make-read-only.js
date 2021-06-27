/**
 * Makes `value` read-only.
 *
 * @param {*} value The `value` to be frozen.
 * @returns Returns a shallow-freezed, read-only `value`,
 */
function makeReadOnly(value) {
  return Object.freeze(value)
}

export default makeReadOnly

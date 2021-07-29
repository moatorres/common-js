import getBy from './get-by'
import isInteger from './is-integer'

/**
 *
 * @param {string|number} prop
 * @param {object|array} obj
 * @example
 *
 * prop('x', { x: 'foo' }) // => foo
 * prop('x', {}) // => undefined
 * prop(0, [10, 20, 30]) // => 10
 */
const prop = (prop, obj) => {
  if (obj == null) return
  return isInteger(prop) ? getBy(prop, obj) : obj[prop]
}

export default prop

import { TypeTags } from '../internal/type-tags'
import getTag from './get-tag'
import isObjectLike from './is-object-like'

/**
 * Checks if `value` is `boolean`.
 *
 * @param {*} value The `value` to check.
 */
function isBoolean(value) {
  return (
    value === true ||
    value === false ||
    (isObjectLike(value) && getTag(value) == TypeTags.Boolean)
  )
}

export default isBoolean

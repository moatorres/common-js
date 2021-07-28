import { TypeTags } from '../internal/type-tags'
import getTag from './get-tag'
import isArray from './is-array'

function isString(value) {
  const type = typeof value

  return (
    type === 'string' ||
    (type === 'object' &&
      value != null &&
      !isArray(value) &&
      getTag(value) == TypeTags.String)
  )
}

export default isString

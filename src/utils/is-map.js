import getTag from './get-tag'
import isObjectLike from './is-object-like'
import { TypeTags } from '../internal/type-tags'

const isMap = (v) =>
  (isObjectLike(v) && getTag(v) === TypeTags.Map) || v instanceof Map

export default isMap

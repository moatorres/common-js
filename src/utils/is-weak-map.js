import isObjectLike from './is-object-like'
import getTag from './get-tag'
import { TypeTags } from '../internal/type-tags'

const isWeakMap = (value) =>
  isObjectLike(value) && getTag(value) == TypeTags.WeakMap

export default isWeakMap

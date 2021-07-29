import isObjectLike from './is-object-like'
import getTag from './get-tag'
import { TypeTags } from '../internal/type-tags'

const isWeakSet = (value) =>
  isObjectLike(value) && getTag(value) == TypeTags.WeakSet

export default isWeakSet

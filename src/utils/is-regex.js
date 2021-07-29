import { TypeTags } from '../internal/type-tags'
import isObjectLike from './is-object-like'
import getTag from './get-tag'

const isRegExp = (value) =>
  isObjectLike(value) && getTag(value) == TypeTags.RegExp

export default isRegExp

import { TypeTags } from '../internal/type-tags'
import isObjectLike from './is-object-like'
import getTag from './get-tag'

const isSet = (value) => isObjectLike(value) && getTag(value) == TypeTags.Set

export default isSet

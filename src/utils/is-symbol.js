import { TypeTags } from '../internal/type-tags'
import getTag from './get-tag'
import isObjectLike from './is-object-like'

function isSymbol(value) {
  if (typeof value === 'symbol') return true

  return isObjectLike(value) && getTag(value) === TypeTags.Symbol
}

export default isSymbol

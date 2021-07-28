import { TypeTags } from '../internal/type-tags'
import getTag from './get-tag'

function isNumber(value) {
  return typeof value === 'number' && getTag(value) === TypeTags.Number
}

export default isNumber

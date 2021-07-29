import isNull from './is-null'
import isObjectLike from './is-object-like'

export default function isStringifiedMap(value) {
  return isObjectLike(value) && !isNull(value) && value.dataType === 'Map'
}

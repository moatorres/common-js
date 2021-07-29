import isNull from './is-null'
import isObjectLike from './is-object-like'

export default function isStringifiedSet(value) {
  return isObjectLike(value) && !isNull(value) && value.dataType === 'Set'
}

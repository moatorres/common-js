import { isNullOrUndefined } from '.'
import isNull from './is-null'

function fromEntries(pairs) {
  const result = {}

  if (isNull(pairs)) return result

  for (const pair of pairs) {
    let key = pair[0]
    let value = pair[1]
    if (isNullOrUndefined(key)) continue
    result[key] = value
  }

  return result
}

export default fromEntries

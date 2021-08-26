import isArray from './is-array'
import isObject from './is-object'
import isEmptyObject from './is-empty-object'

function filterObject(obj, predicate) {
  if (isArray(obj)) return obj.filter(predicate)

  return Object.entries(obj).reduce((acc, [key, value]) => {
    if (isObject(value)) {
      const result = filterObject(value, predicate)
      if (!isEmptyObject(result)) acc[key] = result
    } else if (predicate(value)) acc[key] = value

    return acc
  }, {})
}

export default filterObject

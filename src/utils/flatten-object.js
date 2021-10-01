import isObject from './is-object'
import sortProps from './sort-props'
import isNullOrUndefined from './is-null-or-undefined'

const flattenObject = function (obj, options = {}, result = {}, prefix = '') {
  for (let key in obj) {
    let prop = prefix + (prefix ? '.' : '') + key
    let value = obj[key]
    let shouldRemove = options.removeNullish && isNullOrUndefined(value)

    if (!isObject(value)) {
      if (!shouldRemove)
        result[prop] = options.stringify ? String(value) : value
    } else flattenObject(value, options, result, prop)
  }

  return options.sort ? sortProps(result, options) : result
}

export default flattenObject

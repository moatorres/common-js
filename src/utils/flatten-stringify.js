import { isNotNullOrUndefined, isNullOrUndefined } from '.'
import flattenObject from './flatten-object'
import { removeNullish } from './remove-nullish'
import sortProps from './sort-props'

const hasOwn = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)

const flattenStringify = (data, options = {}, result = {}) => {
  if (options.ignoreArrays) return flattenObject(data, options, result)

  const flatten = (obj, prevKey) => {
    Object.keys(obj).map((key) => {
      const value = obj[key]
      const newKey = prevKey ? `${prevKey}.${key}` : key

      if (isNullOrUndefined(value)) {
        return options.removeNullish
          ? delete result[newKey]
          : (result[newKey] = String('null'))
      }

      if (typeof value !== 'object')
        result[newKey] = options.stringify ? String(value) : value
      else if (!Buffer.isBuffer(value) && !hasOwn(value, 'data'))
        return flatten(value, newKey)
      else result[newKey] = value
    })
  }

  flatten(data)

  return options.sort ? sortProps(result, options) : result
}

export default flattenStringify

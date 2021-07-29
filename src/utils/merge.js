import getOwnPropertyKeys from './get-own-property-keys'
import isPlainObject from './is-plain-object'
import isArray from './is-array'

function merge(obj, extension) {
  if (!extension) return obj
  if (isArray(extension)) return (isArray(obj) ? obj : [obj]).concat(extension)
  if (!isPlainObject(extension)) return extension

  let keys = getOwnPropertyKeys(extension)
  let key, descriptor

  for (key of keys) {
    descriptor = Object.getOwnPropertyDescriptor(extension, key)

    // @ts-ignore
    if (!descriptor.hasOwnProperty('value'))
      // @ts-ignore
      Object.defineProperty(obj, key, descriptor)
    // @ts-ignore
    else if (!descriptor.value) continue

    // recursively
    obj[key] = merge(
      isPlainObject(obj[key]) || isArray(extension[key]) ? obj[key] : {},
      extension[key]
    )
  }

  return obj
}

export default merge

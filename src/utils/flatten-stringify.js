const hasOwn = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)

const flattenAndStringify = (data) => {
  const result = {}

  const flatten = (obj, prevKey) => {
    Object.keys(obj).map((key) => {
      const value = obj[key]
      const newKey = prevKey ? `${prevKey}.${key}` : key

      if (!value && value !== '') return (result[newKey] = String('null'))

      if (typeof value !== 'object') result[newKey] = String(value)
      else if (!Buffer.isBuffer(value) && !hasOwn(value, 'data'))
        return flatten(value, newKey)
      else result[newKey] = value
    })
  }

  flatten(data)

  return result
}

export default flattenAndStringify

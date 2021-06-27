import getTag from './get-tag'

function isString(value) {
  const type = typeof value

  return (
    type === 'string' ||
    (type === 'object' &&
      value != null &&
      !Array.isArray(value) &&
      getTag(value) == '[object String]')
  )
}

export default isString

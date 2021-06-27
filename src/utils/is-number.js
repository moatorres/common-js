import getTag from './get-tag'

function isNumber(value) {
  return typeof value === 'number' && getTag(value) === '[object Number]'
}

export default isNumber

import isString from './is-string'

const slice = Array.prototype.slice

const reverse = (list) =>
  isString(list)
    ? list.split('').reverse().join('')
    : slice.call(list, 0).reverse()

export default reverse

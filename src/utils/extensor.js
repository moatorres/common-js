// see: https://stackoverflow.com/questions/8588563/adding-custom-properties-to-a-function/20734003

import isArray from './is-array'
import isObjectLike from './is-object-like'

function extensor(args) {
  if (isArray(args) || isObjectLike(args)) {
    for (let prop in args) this[prop] = args[prop]
  }
  return this
}

export default extensor

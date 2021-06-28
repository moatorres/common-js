import isNullOrUndefined from './is-null-or-undefined'
import isObject from './is-object'
import isEmptyString from './is-empty-string'
import isArray from './is-array'
import compose from './compose'

const clone = (obj) => JSON.parse(JSON.stringify(obj))

const shouldRemove = (value) =>
  (isObject(value) && !Object.keys(value).length) ||
  isNullOrUndefined(value) ||
  isEmptyString(value)

const removeNested = (objeto) => {
  Object.entries(objeto).forEach(([key, value]) => {
    if (isObject(value)) removeNested(value)
    if (shouldRemove(value))
      isArray(objeto) ? objeto.splice(key, 1) : delete objeto[key]
  })
  return objeto
}

const removeNestedNull = (objeto) => compose(removeNested, clone)(objeto)

export default removeNestedNull

import { typeError } from '../internal/error'
import identity from './identity'
import isArray from './is-array'
import isNumber from './is-number'
import isString from './is-string'

const checkArgTypes = (index, list) => {
  if (!isNumber(index) && isNaN(index))
    typeError('First argument cannot be NaN (removeByIndex)')

  if (!isString(list) && !isArray(list))
    typeError('Second argument must be of type string or array (removeByIndex)')
}

const removeByIndex = (index, list) => {
  checkArgTypes(index, list)

  let idx = index < 0 ? list.length + index : index
  if (isString(list)) return list.slice(0, idx) + list.slice(idx + 1)
  else {
    let res = list.map(identity)
    res.splice(idx, 1)
    return res
  }
}

export default removeByIndex

import { typeError } from '../internal/error'
import isArray from './is-array'
import isNumber from './is-number'
import isString from './is-string'

// const checkArgs = (index, list) => {
//   if (!isNumber(index))
//     typeError(`Argument must be a valid number, received ${typeof index}`)

//   if (!isString(list) && !isArray(list))
//     typeError(
//       `Argument must be of type string or array, received '${typeof list}'`
//     )
// }

const getBy = (prop, thing) => {
  // checkArgs(prop, thing)
  let idx = prop < 0 ? thing.length + prop : prop
  return isString(thing) ? thing.charAt(idx) : thing[idx]
}

export default getBy

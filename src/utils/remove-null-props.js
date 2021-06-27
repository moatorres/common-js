import isEmptyString from './is-empty-string'
import isNullOrUndefined from './is-null-or-undefined'

const removeNullProps = (original) => {
  let objeto = { ...original }

  for (let prop in objeto) {
    let value = objeto[prop]
    if (isNullOrUndefined(value) || isEmptyString(value)) delete objeto[prop]
  }

  return objeto
}

export default removeNullProps

// ES2019+
// const removeNull = (objeto) => {
//   return Object.fromEntries(Object.entries(objeto).filter(([_, value]) => value != null))
// }

import coerceNumber from './coerce-number'
import isNumber from './is-number'

const filterNumbers = (array) => {
  return array
    .filter((v) => isNumber(v) || coerceNumber(v))
    .map((v) => coerceNumber(v))
}

export default filterNumbers

import isString from './is-string'

const filterStrings = (array) => array.filter((item) => isString(item))

export default filterStrings

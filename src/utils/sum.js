import isArray from './is-array'

function sum(array) {
  // if (!isArray(array)) return false

  let total = 0

  for (let i = 0; i < array.length; i++) {
    let value = array[i]
    if (isArray(value)) total += sum(value)
    if (isNaN(value)) continue
    total += Number(value)
  }

  return total
}

export default sum

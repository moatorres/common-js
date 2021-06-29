import isArray from './is-array'

function getTypeOf(value) {
  return isArray(value) ? 'array' : typeof value
}

const getPropTypes = (obj, withValue = false) => {
  let types = []

  for (let key in obj) {
    let val = obj[key]
    let checked = { key: key, type: getTypeOf(val) }

    if (withValue) checked.value = val
    types.push(checked)
  }

  return { types }
}

export default getPropTypes

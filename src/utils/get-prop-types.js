function checkTypeOf(value) {
  if (Array.isArray(value)) return 'array'
  else return typeof value
}

const getPropTypes = (obj, withValue = false) => {
  let types = []

  Object.keys(obj).map((key) => {
    let val = obj[key]

    let checked = { key: key, type: checkTypeOf(val) }

    if (withValue) checked.value = val

    types.push(checked)
  })
  return { types }
}

export default getPropTypes

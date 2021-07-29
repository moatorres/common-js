const _pick = (names, obj) => {
  let result = {}
  let index = 0

  while (index < names.length) {
    if (names[index] in obj) result[names[index]] = obj[names[index]]
    index += 1
  }

  return result
}

const pickAll = (names, obj) => {
  let result = {}
  let index = 0

  while (index < names.length) {
    let prop = names[index]
    result[prop] = obj[prop]
    index += 1
  }

  return result
}

const pickBy = (predicate, obj) => {
  let result = {}
  let prop

  for (prop in obj)
    if (predicate(obj[prop], prop, obj)) result[prop] = obj[prop]

  return result
}

export default Object.assign(_pick, {
  all: pickAll,
  by: pickBy,
})

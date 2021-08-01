function concat(original = [], extension = []) {
  let index
  let result = []

  index = 0

  while (index < original.length) {
    result[result.length] = original[index]
    index += 1
  }

  index = 0

  while (index < extension.length) {
    result[result.length] = extension[index]
    index += 1
  }

  return result
}

export default concat

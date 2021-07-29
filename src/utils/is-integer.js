function isInteger(value) {
  return Number.isInteger ? Number.isInteger(value) : value << 0 === value
}

export default isInteger

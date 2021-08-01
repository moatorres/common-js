const coerceNumber = (value) =>
  !Number.isNaN(value) ? parseInt(value, 10) : value

export default coerceNumber

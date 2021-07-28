const defaultTo = (defaultValue) => (value) =>
  value == null || value !== value ? defaultValue : value

export default defaultTo

import makeReadOnly from '../utils/make-read-only'

const Identifier = (value) => {
  let _value = value

  const toString = () => String(_value)
  const toValue = () => _value

  function equals(id) {
    if (id === null || id === undefined) return false
    return id.toValue() === _value
  }

  return makeReadOnly({
    equals,
    toString,
    toValue,
  })
}

export const makeIdentifier = (id) => Identifier(id)

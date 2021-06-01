import makeReadOnly from '../utils/make-read-only'
import pipe from '../utils/pipe'
import withConstructor from '../utils/with-constructor'

const Identifier = (value) => (o) => {
  let _value = value

  function equals(id) {
    if (id === null || id === undefined) {
      return false
    }

    if (this.constructor !== Identifier) {
      return false
    }

    return id.toValue() === _value
  }

  function toString() {
    return String(_value)
  }

  function toValue() {
    return _value
  }

  return makeReadOnly({
    equals,
    toString,
    toValue,
  })
}

export const makeIdentifier = (props) =>
  pipe(Identifier(props), withConstructor(Identifier))(props)

export function makeIdFactory({ nanoid }) {
  function gerarId(id) {
    const alfabeto = '0123456789abcdef'
    const nano = nanoid.customAlphabet(alfabeto, 24)

    const _id = id ? String(id) : nano()
    return makeReadOnly(makeIdentifier(_id))
  }

  return makeReadOnly({
    create: gerarId,
  })
}

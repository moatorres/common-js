import isStringifiedMap from './is-stringified-map'
import isStringifiedSet from './is-stringified-set'
import makeReadOnly from './make-read-only'

// helpers
const transformMap = (value) => ({
  dataType: 'Map',
  value: [...value],
})

const transformSet = (value) => ({
  dataType: 'Set',
  value: [...value],
})

function safeReviver(key, value) {
  if (isStringifiedMap(value)) return new Map(value.value)
  if (isStringifiedSet(value)) return new Set(value.value)
  return value
}

function safeStringifier(key, value) {
  return value instanceof Map
    ? transformMap(value)
    : value instanceof Set
    ? transformSet(value)
    : value
}

const parse = (value) => JSON.parse(value, safeReviver)
const stringify = (value) => JSON.stringify(value, safeStringifier)

const safeJSON = makeReadOnly({
  parse,
  stringify,
})

export default safeJSON

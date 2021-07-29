import isStringifiedMap from './is-stringified-map'
import isStringifiedSet from './is-stringified-set'
import makeReadOnly from './make-read-only'
import setReplacer from './set-replacer'
import mapReplacer from './map-replacer'

function safeReviver(key, value) {
  if (isStringifiedMap(value)) return new Map(value.value)
  if (isStringifiedSet(value)) return new Set(value.value)
  return value
}

function safeStringifier(key, value) {
  return value instanceof Map
    ? mapReplacer(null, value)
    : value instanceof Set
    ? setReplacer(null, value)
    : value
}

const parse = (value) => JSON.parse(value, safeReviver)
const stringify = (value) => JSON.stringify(value, safeStringifier)

const safeJSON = makeReadOnly({
  parse,
  stringify,
})

export default safeJSON

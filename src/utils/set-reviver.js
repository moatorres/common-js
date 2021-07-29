import isStringifiedSet from './is-stringified-set'

export default function setReviver(key, value) {
  return isStringifiedSet(value) ? new Set(value.value) : value
}

// usage!
// const newValue = JSON.parse(myStringifiedSet, setReviver)

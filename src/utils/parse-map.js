import isStringifiedMap from './is-stringified-map'

export default function parseMap(key, value) {
  return isStringifiedMap(value) ? new Map(value.value) : value
}

// usage!
// const newValue = JSON.parse(myStringifiedMap, parseMap)

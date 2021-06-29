export default function parseMap(key, value) {
  if (typeof value === 'object' && value !== null) {
    if (value.dataType === 'Map') {
      return new Map(value.value)
    }
  }
  return value
}

// usage!
// const newValue = JSON.parse(myStringifiedMap, parseMap)

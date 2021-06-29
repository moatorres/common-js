export default function stringifyMap(key, value) {
  if (!(value instanceof Map)) return value

  return {
    dataType: 'Map',
    value: [...value],
  }
}

// usage!
// const str = JSON.stringify(myMap, stringifyMap)

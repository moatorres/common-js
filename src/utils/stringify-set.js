export default function stringifySet(key, value) {
  if (!(value instanceof Set)) return value

  return {
    dataType: 'Set',
    value: [...value],
  }
}

// usage!
// const val = JSON.stringify(mySet, stringifySet)

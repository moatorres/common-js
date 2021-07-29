export default function setReplacer(key, value) {
  if (!(value instanceof Set)) return value

  return {
    dataType: 'Set',
    value: [...value],
  }
}

// usage!
// const val = JSON.stringify(mySet, setReplacer)

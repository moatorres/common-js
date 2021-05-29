export default function deepFreeze(objeto) {
  const props = Object.getOwnPropertyNames(objeto)

  for (const prop of props) {
    const value = objeto[prop]

    if (value && typeof value === 'object') {
      deepFreeze(value)
    }
  }

  return Object.freeze(objeto)
}

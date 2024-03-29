import getOwnPropertyKeys from './get-own-property-keys'

const assign = (destino, origem) => {
  if (!origem) return destino

  let keys = getOwnPropertyKeys(origem)

  for (let key in keys) {
    let desc = Object.getOwnPropertyDescriptor(origem, keys[key])
    // @ts-ignore
    Object.defineProperty(destino, keys[key], desc)
  }

  return destino
}

export default assign

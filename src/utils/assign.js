import getOwnPropertyKeys from './get-own-property-keys'
import mergeOrAssign from './merge-or-assign'

const _assign = (destino, origem) => {
  if (!origem) return destino

  let keys = getOwnPropertyKeys(origem)

  for (let key in keys) {
    let desc = Object.getOwnPropertyDescriptor(origem, keys[key])
    // @ts-ignore
    Object.defineProperty(destino, keys[key], desc)
  }

  return destino
}

const assign = mergeOrAssign.bind(0, _assign)

export default assign

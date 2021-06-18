function getOwnPropertyKeys(obj) {
  return Object.getOwnPropertyNames(obj).concat(
    // @ts-ignore
    Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(obj) : []
  )
}

export default getOwnPropertyKeys

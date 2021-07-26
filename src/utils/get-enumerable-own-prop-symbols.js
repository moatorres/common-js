const getSymbols = Object.getOwnPropertySymbols

function getEnumerableOwnPropSymbols(target) {
  return getSymbols
    ? getSymbols(target).filter((symbol) => target.propertyIsEnumerable(symbol))
    : []
}

export default getEnumerableOwnPropSymbols

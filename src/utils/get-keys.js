import getEnumerableOwnPropSymbols from './get-enumerable-own-prop-symbols'

function getKeys(target) {
  // @ts-ignore
  return Object.keys(target).concat(getEnumerableOwnPropSymbols(target))
}
export default getKeys

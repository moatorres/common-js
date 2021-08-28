/**
 * Functor
 *
 * This implementation comes with some caveats:
 * 1. It's not possible to use value++ syntax
 * 2. It's not possible to delete a property
 * 3. It's not possible to give a null or undefined value to a property
 */
function objectMap(f, ctx) {
  ctx = ctx || this
  let self = this
  let result = {}

  Object.keys(self).map(function (k) {
    result[k] = f.call(ctx, self[k], k, self) || self[k]
  })
  return result
}

export default objectMap

/**
 * Function
 * ES5
 */
export function objectMapFn5(object, mapFn) {
  return Object.keys(object).reduce(function (result, key) {
    result[key] = mapFn(object[key])
    return result
  }, {})
}

/**
 * Function
 * ES6
 */
export const objectMapFn6 = (obj, fn) =>
  Object.fromEntries(Object.entries(obj).map(([k, v], i) => [k, fn(v, k, i)]))

/**
 * Function
 * ES7
 */
export const objectMapFn7 = (obj, fn) =>
  // @ts-ignore
  Object.assign(...Object.entries(obj).map(([k, v]) => ({ [k]: fn(v) })))

/**
 * Recursive
 * ES7
 */
export function objectMapFnR(o, fn) {
  return Object.fromEntries(
    Object.entries(o).map(([k, v]) => [
      k,
      v === Object(v) ? objectMapFnR(v, fn) : fn(v),
    ])
  )
}

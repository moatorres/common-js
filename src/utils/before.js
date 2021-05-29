/**
 * Creates a function that invokes `fn`, with the `this` binding and arguments
 * of the created function, while it's called less than `n` times. Subsequent
 * calls to the created function return the result of the last `fn` invocation.
 *
 * @param {number} n The number of calls at which `fn` is no longer invoked.
 * @param {Function} fn The function to restrict.
 * @returns {Function} Returns the new restricted function.
 *
 */
function before(n, fn) {
  let result

  if (typeof fn !== 'function') {
    throw new TypeError('Expected a function (before)')
  }

  return function (...args) {
    if (--n > 0) {
      result = fn.apply(this, args)
    }

    if (n <= 1) {
      // @ts-ignore
      fn = undefined
    }

    return result
  }
}

export default before

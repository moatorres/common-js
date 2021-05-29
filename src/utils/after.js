/**
 * The opposite of `before`. This method creates a function that invokes
 * `fn` once it's called `n` or more times.
 *
 * @param {number} n The number of calls before `fn` is invoked.
 * @param {Function} fn The function to restrict.
 * @returns {Function} Returns the new restricted function.
 *
 */
function after(n, fn) {
  if (typeof fn !== 'function') {
    throw new TypeError('Expected a function (after)')
  }

  n = n || 0

  return function (...args) {
    if (--n < 1) {
      return fn.apply(this, args)
    }
  }
}

export default after

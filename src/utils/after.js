import isFunction from './is-function'

/**
 * The opposite of `before`. This method creates a function that invokes
 * `fn` once it's called `n` or more times.
 *
 * @param {number} n The number of calls before `fn` is invoked.
 * @param {Function} fn The function to restrict.
 * @returns {Function} Returns the new restricted function.
 *
 */
function after(n = 0, fn) {
  if (!isFunction(fn)) throw new TypeError('Expected a function (after)')

  return function (...args) {
    if (--n < 1) return fn.apply(this, args)
  }
}

export default after

import isFunction from './is-function'

/**
 * Creates a function that memoizes the result of `func`.
 *
 * If `resolver` is provided, it determines the
 * cache key for storing the result based on
 * the arguments provided to the memoized function.
 *
 * By default, the first argument provided to the
 * memoized function is used as the map cache key.
 *
 * The `func` is invoked with the `this` binding of
 * the memoized function.
 */
function memoize(func, resolver) {
  if (!isFunction(func))
    throw new TypeError("Memoize's first argument must be a function")

  if (resolver != null && !isFunction(resolver))
    throw new TypeError("Memoize's second argument must be a function")

  const memoized = function (...args) {
    const key = resolver ? resolver.apply(this, args) : args[0]

    const cache = memoized.cache

    if (cache.has(key)) return cache.get(key)

    const result = func.apply(this, args)

    memoized.cache = cache.set(key, result) || cache

    return result
  }

  memoized.cache = new (memoize.Cache || Map)()

  return memoized
}

// TODO: add a clearable Multimap
memoize.Cache = Map

export default memoize

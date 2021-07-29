import isNotNullOrUndefined from './is-not-null-or-undefined'

/**
 * Safe objects won't throw when trying to get a property which doesn't exist.
 *
 * @example
 * const user = {
 *    name: 'Paul',
 *    location: {
 *      city: 'Paris'
 *    },
 *    friends: [
 *      {
 *        name: 'Patrick'
 *      }
 *    ]
 *  }
 *
 * console.log(safe(user).name.getValue())
 * // => Paul
 * console.log(safe(user).friends[0].name.length.getValue())
 * // => 7
 * console.log(safe(user).friends[3].name.length.getValue())
 * // => undefined
 *
 */
function safeObject(value) {
  return new Proxy(
    {
      getValue() {
        return value
      },
    },
    {
      get(obj, key) {
        return key === 'getValue'
          ? obj[key]
          : safeObject(isNotNullOrUndefined(value) ? value[key] : value)
      },
    }
  )
}

export default safeObject

/**
 * Sorts an object's properties by its names.
 *
 * Properties' keys are sorted in the following order:
 * (1) indices, sorted numerically;
 * (2) string keys (that are not indices);
 * (3) symbol properties.
 *
 * @param {object} target - The object to be sorted.
 * @param {object} [options] - Accepts an options object with {reverse} property to sort props descendingly.
 * @returns {object} A new object with sorted properties.
 */
function sortProps(target, options = {}) {
  let keys = Object.keys(target)
  keys = options.reverse ? keys.sort().reverse() : keys.sort()
  return keys.reduce((obj, key) => {
    obj[key] = target[key]
    return obj
  }, {})
}

export default sortProps

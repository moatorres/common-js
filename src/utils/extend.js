const extend = function (original, outro) {
  let extended = {}
  let prop

  for (prop in original)
    if (Object.prototype.hasOwnProperty.call(original, prop))
      extended[prop] = original[prop]

  for (prop in outro)
    if (Object.prototype.hasOwnProperty.call(outro, prop))
      extended[prop] = outro[prop]

  return extended
}

export default extend

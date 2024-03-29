function callAll(...fns) {
  return (...args) => fns.forEach((fn) => fn && fn(...args))
}

export default callAll

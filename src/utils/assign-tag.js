const defineToString = (o) => {
  Object.defineProperty(o, 'toString', {
    value: Object.prototype.toString,
    configurable: true,
    writable: false,
    enumerable: false,
  })
}

const defineTag = (o, tag) => {
  return Object.defineProperty(o, Symbol.toStringTag, {
    value: tag,
    configurable: true,
    writable: false,
    enumerable: false,
  })
}

const assignTag = (o, tag) => {
  if (!o.toString) defineToString(o)
  return defineTag(o, tag)
}

export default assignTag

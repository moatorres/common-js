class InvalidParamError extends Error {
  constructor(param, type) {
    super(
      `Parâmetro inválido (${param}). Você deve inserir um parâmetro do tipo: ${type}.`
    )

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, TypeError)
    }
  }
}

const isBoolean = (arg) => typeof arg === 'boolean'
const isNumber = (arg) => typeof arg === 'number'
const isString = (arg) => typeof arg === 'string'
const isFunction = (arg) => typeof arg === 'function'
const isObject = (arg) => arg !== null && typeof arg === 'object'
const isArray = (arg) => arg instanceof Array
const isObjectId = (arg) => /^[a-f\d]{24}$/i.test(arg)
const isPrimitive = (arg) =>
  arg === null || (typeof arg !== 'object' && typeof arg !== 'function')

export function checkType(param, type = null) {
  switch (type) {
    case 'boolean':
      if (!isBoolean(param)) throw new InvalidParamError(typeof param, type)
      return true

    case 'string':
      if (!isString(param)) throw new InvalidParamError(typeof param, type)
      return true

    case 'number':
      if (!isNumber(param)) throw new InvalidParamError(typeof param, type)
      return true

    case 'function':
      if (!isFunction(param)) throw new InvalidParamError(typeof param, type)
      return true

    case 'object':
      if (!isObject(param)) throw new InvalidParamError(typeof param, type)
      return true

    case 'array':
      if (!isArray(param)) throw new InvalidParamError(typeof param, type)
      return true

    case 'primitive':
      if (!isPrimitive(param)) throw new InvalidParamError(typeof param, type)
      return true

    case 'objectid':
      if (!isObjectId(param)) throw new InvalidParamError(typeof param, type)
      return true

    default:
      return typeof param
  }
}

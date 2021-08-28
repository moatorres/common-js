import extensor from './extensor'

const extendable = (function () {
  const extendedFn = function (v, obj) {
    v.extend = extensor
    return v.extend(obj)
  }

  extendedFn.create = function (v, args) {
    // @ts-ignore
    return new this(v, args)
  }
  return extendedFn
})()

export default extendable

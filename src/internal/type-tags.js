import makeReadOnly from '../utils/make-read-only'

export const TypeTags = makeReadOnly({
  Array: '[object Array]',
  ArrayBuffer: '[object ArrayBuffer]',
  BigInt64Array: '[object BigInt64Array]',
  BigUint64Array: '[object BigUint64Array]',
  Boolean: '[object Boolean]',
  Date: '[object Date]',
  Error: '[object Error]',
  Float32Array: '[object Float32Array]',
  Float64Array: '[object Float64Array]',
  Function: '[object Function]',
  Int8Array: '[object Int8Array]',
  Int16Array: '[object Int16Array]',
  Int32Array: '[object Int32Array]',
  Map: '[object Map]',
  Math: '[object Math]',
  Null: '[object Null]',
  Number: '[object Number]',
  Object: '[object Object]',
  RegExp: '[object RegExp]',
  Set: '[object Set]',
  String: '[object String]',
  Symbol: '[object Symbol]',
  Uint8Array: '[object Uint8Array]',
  Uint8ClampedArray: '[object Uint8ClampedArray]',
  Uint16Array: '[object Uint16Array]',
  Uint32Array: '[object Uint32Array]',
  Undefined: '[object Undefined]',
  WeakMap: '[object WeakMap]',
  WeakRef: '[object WeakRef]',
  WeakSet: '[object WeakSet]',
})

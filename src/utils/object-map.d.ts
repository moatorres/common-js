export default function objectMap<T>(
  f: (value: any, key?: PropertyKey, object?: T) => T,
  ctx?: T | U
): T

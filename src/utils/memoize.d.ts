declare interface Memoized {
  (...args: any[]): any
  cache: Map<any, any>
}

export default function memoize(
  fn: (args: any) => T,
  resolver?: Function
): Memoized

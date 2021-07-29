type PickType = {
  (names: string[], obj: {}): {}
  all(names: string[], obj: {}): {}
  by(predicate: (v: T) => any, obj: {}): Object<T>
}

declare const pick: PickType
export default pick

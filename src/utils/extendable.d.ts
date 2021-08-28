declare interface Extendable<T> {
  extend<T>(args: U): T & U
}

declare interface ExtendableFactory<T> {
  create<T>(value: T, args: U): Extendable<T> & U
}

declare const extendable: ExtendableFactory<T>

export default extendable

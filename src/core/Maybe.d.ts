type CallbackFunction<T = unknown> = (...params: unknown[]) => T

export class Maybe<T> {
  private constructor(private value: T | null) {}

  static just<T>(a: any): Maybe<T>
  static nothing<T>(): Maybe<T>
  static fromValue<T>(value: T | undefined | null): Maybe<T>

  isJust(): boolean
  isNothing(): boolean
  toString(): string
  has(): boolean
  getOrElse<R = T>(defaultValue: T | R): T | R
  getOrExecute(defaultValue: CallbackFunction<T>): T
  map<R>(f: (wrapped: T) => R): Maybe<R>
  tap(f: (wrapped: T) => void): Maybe<T>
  flatMap<R>(f: (wrapped: T) => any): Maybe<R>
  getOrThrow(error?: Error): T
}

interface ITuple<F, S> {
  fst(): F
  snd(): S
  toArray(): [F, S]
  unwrap(): [F, S]
  toJSON(): [F, S]
  inspect(): string
  toString(): string
  equals(other: ITuple<F, S>): boolean
  bimap<F2, S2>(f: (fst: F) => F2, g: (snd: S) => S2): ITuple<F2, S2>
  mapFirst<F2>(f: (fst: F) => F2): ITuple<F2, S>
  map<S2>(f: (snd: S) => S2): ITuple<F, S2>
  reduce<T>(reducer: (accumulator: T, value: S) => T, initialValue: T): T
  swap(): ITuple<S, F>
  ap<T, S2>(f: ITuple<T, (value: S) => S2>): ITuple<F, S2>
  every(pred: (value: F | S) => boolean): boolean
  some(pred: (value: F | S) => boolean): boolean
}

interface ITupleType<F, S> {
  <F, S>(first: F, second: S): ITuple<F, S>
  of<F, S>(fst: F, snd: S): ITuple<F, S>
  fromArray<F, S>([fst, snd]: [F, S]): ITuple<F, S>
  fromArray<F, S>([fst, snd]: (F | S)[]): ITuple<F, S>
  fanout<F, S, T>(
    f: (value: T) => F,
    g: (value: T) => S,
    value: T
  ): ITuple<F, S>
  fanout<F, S, T>(
    f: (value: T) => F,
    g: (value: T) => S
  ): (value: T) => ITuple<F, S>
  fanout<F, T>(
    f: (value: T) => F
  ): <S>(g: (value: T) => S) => (value: T) => ITuple<F, S>
}

export const Tuple: ITupleType<F, S>

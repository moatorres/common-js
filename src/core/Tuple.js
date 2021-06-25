const makeTuple = (first, second) => ({
  fst: () => first,
  snd: () => second,
  swap: () => makeTuple(second, first),
  equals: (other) => first === other.fst() && second === other.snd(),
  map: (f) => makeTuple(first, f(second)),
  mapFirst: (f) => makeTuple(f(first), second),
  bimap: (f, g) => makeTuple(f(first), g(second)),
  ap: (f) => makeTuple(first, f.snd()(second)),
  reduce: (reducer, initialValue) => reducer(initialValue, second),
  some: (pred) => pred(first) || pred(second),
  every: (pred) => pred(first) && pred(second),
  inspect: () => `Tuple(${JSON.stringify(first)}, ${JSON.stringify(second)})`,
  toArray: () => [first, second],
  unwrap: function () {
    return this.toArray()
  },
  toJSON: function () {
    return this.toArray()
  },
  toString: function () {
    return this.inspect()
  },
  [Symbol.iterator]: function* () {
    yield first
    yield second
  },
})

export const Tuple = Object.assign((fst, snd) => makeTuple(fst, snd), {
  of: ([fst, snd]) => makeTuple(fst, snd),
  fromArray: ([fst, snd]) => makeTuple(fst, snd),
  fanout: function (...args) {
    const [f, g, value] = args
    switch (args.length) {
      case 3:
        return makeTuple(f(value), g(value))
      case 2:
        return (value) => this.fanout(f, g, value)
      default:
        return (g) => (value) => this.fanout(f, g, value)
    }
  },
})

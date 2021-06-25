import { Tuple } from './Tuple'

let tup

beforeEach(() => {
  tup = Tuple(1, true)
})

describe('Static', () => {
  it('Should be defined', () => {
    expect(Tuple).toBeDefined()
  })

  describe('Tuple.fromArray()', () => {
    it('Should be defined', () => {
      expect(Tuple.fromArray).toBeDefined()
    })

    it('Should construct a tuple from an array with two elements', () => {
      let arr = [1, 'Pa']
      tup = Tuple.fromArray(arr)

      expect(tup.toArray()).toEqual(arr)
      expect(tup.equals(tup)).toBeTrue()
    })
  })

  describe('Tuple.of()', () => {
    it('Should be defined', () => {
      expect(Tuple.of).toBeDefined()
    })

    it('Should construct a tuple from an array with two elements', () => {
      let arr = [2, 'Blue']
      tup = Tuple.of(arr)

      expect(tup.toArray()).toEqual(arr)
      expect(tup.equals(tup)).toBeTrue()
    })
  })

  describe('Tuple.fanout()', () => {
    it('Should be defined', () => {
      expect(Tuple.fanout).toBeDefined()
    })

    it('Should apply two functions over a single value and construct a tuple from the results', () => {
      tup = Tuple.fanout(
        (x) => x[0],
        (x) => x + 's',
        'moka'
      )

      expect(tup.toArray()).toEqual(['m', 'mokas'])
      expect(tup.equals(tup)).toBeTrue()
    })
  })
})

describe('Tuple', () => {
  describe('.fst()', () => {
    it('Should be defined', () => {
      expect(tup.fst).toBeDefined()
    })

    it('Should return the first value of "this"', () => {
      expect(tup.fst()).toEqual(1)
    })
  })

  describe('.snd()', () => {
    it('Should be defined', () => {
      expect(tup.snd).toBeDefined()
    })

    it('Should return the second value of "this"', () => {
      expect(tup.snd()).toEqual(true)
    })
  })

  describe('.toArray()', () => {
    it('Should be defined', () => {
      expect(tup.toArray).toBeDefined()
    })

    it('Should return an array with the 2 values inside "this"', () => {
      expect(tup.toArray()).toEqual([1, true])
    })
  })

  describe('.swap()', () => {
    it('Should be defined', () => {
      expect(tup.swap).toBeDefined()
    })

    it('Should swap the values inside "this"', () => {
      expect(tup.swap().toArray()).toEqual([true, 1])
    })
  })

  describe('.equals()', () => {
    it('Should be defined', () => {
      expect(tup.equals).toBeDefined()
    })

    it('Should compare the values inside "this" and another tuple', () => {
      let tap = Tuple(2, '')
      expect(tup.equals(tup)).toBeTrue()
      expect(tap.equals(tup)).toBeFalse()
    })
  })

  describe('.map()', () => {
    it('Should be defined', () => {
      expect(tup.map).toBeDefined()
    })

    it('Should apply a function to the second value of "this"', () => {
      expect(tup.map((x) => !x).toArray()).toEqual([1, false])
    })
  })

  describe('.mapFirst()', () => {
    it('Should be defined', () => {
      expect(tup.mapFirst).toBeDefined()
    })

    it('Should apply a function to the first value of "this"', () => {
      expect(tup.mapFirst((v) => v * 100).toArray()).toEqual([100, true])
    })
  })

  describe('.bimap()', () => {
    it('Should be defined', () => {
      expect(tup.bimap).toBeDefined()
    })

    it('Should transform the two values inside "this" with two mapper functions', () => {
      expect(
        tup
          .bimap(
            (x) => x * 2,
            (x) => !x
          )
          .toArray()
      ).toEqual([2, false])
    })
  })

  describe('.reduce()', () => {
    it('Should be defined', () => {
      expect(tup.reduce).toBeDefined()
    })

    it('Should pass the initialValue and the second value inside of `this` as arguments to the reducer', () => {
      tup = Tuple(1, 2) // → Tuple(x, y)
      // acc → initialValue
      // y → second value of the calling tuple
      expect(tup.reduce((acc, y) => acc + y, 10)).toEqual(12)
    })
  })

  describe('.ap()', () => {
    it('Should be defined', () => {
      expect(tup.ap).toBeDefined()
    })

    it('Should apply the second value of a tuple to the second value of "this"', () => {
      expect(tup.ap(Tuple('toggle', (x) => !x)).toArray()).toEqual([1, false])
    })
  })

  describe('.some()', () => {
    it('Should be defined', () => {
      expect(tup.some).toBeDefined()
    })

    it('Should test whether at least one element in the tuple passes the test implemented by the predicate function', () => {
      expect(tup.some((v) => typeof v === 'boolean')).toBeTrue()
    })
  })

  describe('.every()', () => {
    it('Should be defined', () => {
      expect(tup.every).toBeDefined()
    })

    it('Should test whether both elements in the tuple passes the test implemented by the predicate function', () => {
      expect(tup.every((v) => v > 0)).toBeTrue()
      expect(tup.every((v) => typeof v === 'number')).toBeFalse()
    })
  })

  describe('.inspect()', () => {
    it('Should be defined', () => {
      expect(tup.inspect).toBeDefined()
    })

    it('Should return a stringified representation of the tuple', () => {
      expect(tup.inspect()).toEqual('Tuple(1, true)')
    })
  })

  describe('.toJSON()', () => {
    it('Should be defined', () => {
      expect(tup.toJSON).toBeDefined()
    })

    it('Should return an array with the 2 values inside "this" (alias of .toArray())', () => {
      expect(tup.toJSON()).toEqual([1, true])
    })
  })

  describe('.unwrap()', () => {
    it('Should be defined', () => {
      expect(tup.unwrap).toBeDefined()
    })

    it('Should return an array with the 2 values inside "this" (alias of .toArray())', () => {
      expect(tup.unwrap()).toEqual([1, true])
    })
  })

  describe('.toString()', () => {
    it('Should be defined', () => {
      expect(tup.toString).toBeDefined()
    })

    it('Should return a stringified representation of the tuple', () => {
      expect(tup.toString()).toEqual('Tuple(1, true)')
    })
  })

  describe('[Symbol.iterator]', () => {
    it('Should be defined', () => {
      expect(tup[Symbol.iterator]).toBeDefined()
    })

    it('Should allow us to destructure tuples like we destructure arrays', () => {
      let [f, s] = tup
      expect(f).toEqual(1)
      expect(s).toEqual(true)
    })
  })
})

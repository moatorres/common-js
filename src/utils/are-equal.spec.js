/** @see http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero  */
import areEqual from './are-equal'

const a = { name: 'moka', age: 10 }
const b = { name: 'tech', age: 10 }
const c = { name: 'moka', age: 10 }

describe('areEqual', () => {
  it('Should be defined', () => {
    expect(areEqual).toBeDefined()
  })

  it('Should allow perform a "same-value-zero" comparison between two values to determine if they are equivalent', () => {
    expect(areEqual(a, b)).toBeFalse()
  })

  it('Should return true if both values are equivalent', () => {
    expect(areEqual(a.name, c.name)).toBeTrue()
  })
})

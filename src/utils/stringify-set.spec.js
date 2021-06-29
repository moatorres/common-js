import stringifySet from './stringify-set'
import parseSet from './parse-set'

describe('stringifySet()', () => {
  it('Should be defined', () => {
    expect(stringifySet).toBeDefined()
  })

  it('Should allow us to successfully stringify Set objects by passing it as a second argument to JSON.stringify native function', () => {
    let mySet = new Set([1, 2, 3])

    let stringified = JSON.stringify(mySet, stringifySet)
    let parsed = JSON.parse(stringified, parseSet)

    expect(parsed).toEqual(mySet)
    expect(parsed.has(1)).toBeTrue()
    expect(parsed.has(2)).toBeTrue()
    expect(parsed.has(3)).toBeTrue()
    expect(parsed instanceof Set).toBeTrue()
    expect(typeof stringified === 'string').toBeTrue()
  })
})

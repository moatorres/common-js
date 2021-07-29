import setReviver from './set-reviver'
import setReplacer from './set-replacer'

describe('setReviver()', () => {
  it('Should be defined', () => {
    expect(setReviver).toBeDefined()
  })

  it('Should allow us to successfully parse Set objects by adding it as a second argument to JSON.parse native function', () => {
    let mySet = new Set([1, 2])

    let stringified = JSON.stringify(mySet, setReplacer)
    let parsed = JSON.parse(stringified, setReviver)

    expect(parsed).toEqual(mySet)
    expect(parsed instanceof Set).toBeTrue()
    expect(mySet.has(1)).toEqual(parsed.has(1))
    expect(mySet.has(2)).toEqual(parsed.has(2))
    expect(typeof stringified === 'string').toBeTrue()
  })
})

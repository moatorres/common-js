import isFalse from './is-false'

describe('isFalse()', () => {
  it('Should return "true" if the value a "false" of type boolean', () => {
    expect(isFalse(false)).toBeTrue()
  })

  it('Should return "false" if the value is undefined', () => {
    expect(isFalse(undefined)).toBeFalse()
  })

  it('Should return "false" if the value is null', () => {
    expect(isFalse(null)).toBeFalse()
  })

  it('Should return "false" if the value is not a boolean', () => {
    expect(isFalse()).toBeFalse()
    expect(isFalse({})).toBeFalse()
    expect(isFalse({ string: '' })).toBeFalse()
    expect(isFalse([])).toBeFalse()
    expect(isFalse([{}])).toBeFalse()
    expect(isFalse([{ string: '' }])).toBeFalse()
  })
})

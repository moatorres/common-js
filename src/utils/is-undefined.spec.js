import isUndefined from './is-undefined'

describe('isUndefined()', () => {
  it('Should be defined', () => {
    expect(isUndefined).toBeDefined()
  })

  it('Should strictly return "false" if receives any value other than undefined, including "null"', () => {
    expect(isUndefined([])).toBeFalse()
    expect(isUndefined(null)).toBeFalse()
  })

  it('Should return "true" if receives an undefined value', () => {
    let nada
    expect(isUndefined(nada)).toBeTrue()
    expect(isUndefined(void 0)).toBeTrue()
    expect(isUndefined(undefined)).toBeTrue()
  })
})

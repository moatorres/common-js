import isBoolean from './is-boolean'

describe('isBoolean()', () => {
  it('Should be defined', () => {
    expect(isBoolean).toBeDefined()
  })

  it('Should return "true" if receives a boolean value', () => {
    let yes = true
    let no = false
    expect(isBoolean(yes)).toBeTrue()
    expect(isBoolean(no)).toBeTrue()
    expect(isBoolean('true')).toBeFalse()
    expect(isBoolean('false')).toBeFalse()
    expect(isBoolean(1)).toBeFalse()
    expect(isBoolean(0)).toBeFalse()
    expect(isBoolean(-1)).toBeFalse()
  })
})

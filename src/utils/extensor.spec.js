import extensor from './extensor'

describe('extensor', () => {
  it('Should be defined', () => {
    expect(extensor).toBeDefined()
  })

  it('Should allow us to add an extensor method into a function', () => {
    const toLower = (s) => String(s).toLowerCase()

    toLower.extend = extensor // the extensor function

    toLower.extend({
      isLowerCased: (s) =>
        s.split().every((char) => char === char.toLowerCase()),
    })

    let props = Object.getOwnPropertyNames(toLower)

    expect(toLower.extend).toBeDefined()

    // @ts-ignore
    expect(toLower.isLowerCased).toBeDefined()
    // @ts-ignore
    expect(toLower.isLowerCased('ok')).toBeTrue()
    // @ts-ignore
    expect(toLower.isLowerCased('OK')).toBeFalse()

    expect(props.includes('isLowerCased')).toBeTrue()
  })

  it('Should allow us to add an extensor method into an object', () => {
    const user = { name: 'moka', roles: ['guest'] }

    function isAdmin() {
      return this.roles.includes('admin')
    }

    user.extend = extensor
    user.extend({ isAdmin })

    expect(user.extend).toBeDefined()
    expect(user.isAdmin).toBeDefined()
    expect(user.isAdmin()).toBeFalse()
  })
})

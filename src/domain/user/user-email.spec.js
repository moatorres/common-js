import { makeUserEmailFactory, userEmailBuilder } from './user-email'

let builder = userEmailBuilder()
let factory = makeUserEmailFactory()

describe('UserEmail Builder', () => {
  it('Should have a "build" method of type "function"', () => {
    expect(typeof builder.build === 'function').toBeTruthy()
    expect(builder.build).toBeDefined()
  })

  it('Should have a "setEmail" method of type "function"', () => {
    expect(typeof builder.setEmail === 'function').toBeTruthy()
    expect(builder.setEmail).toBeDefined()
  })

  it('"setEmail" method should set the email value', () => {
    const user = builder.setEmail('moka@moka.com').build()
    expect(user.email).toEqual('moka@moka.com')
  })

  it('Should not allow email to be set after object is built', () => {
    expect(() => builder.setEmail('flor@boa.co.uk')).toThrow()
  })
})

describe('UserEmail Factory', () => {
  it('Should have a "create" method of type "function"', () => {
    expect(typeof factory.create === 'function').toBeTruthy()
    expect(factory.create).toBeDefined()
  })

  it('Should not allow the factory methods to be overriden', () => {
    expect(factory).toBeFrozen()
  })

  it('Should throw if the ".create()" method is called without parameters', () => {
    // @ts-ignore
    expect(() => factory.create()).toThrow()
    // @ts-ignore
    expect(() => factory.create({})).toThrow()
  })

  it('Should throw if the "email" supplied isn\'t valid', () => {
    // @ts-ignore
    expect(() => factory.create({ email: 1 })).toThrow()
    expect(() => factory.create({ email: 'moka' })).toThrow()
    expect(() => factory.create({ email: 'moka@mok' })).toThrow()
    expect(() => factory.create({ email: 'moka@moka.com' })).not.toThrow()
  })

  it('Should return an object when an "email" value is passed', () => {
    const userTwo = factory.create({ email: 'moka@moka.com' })
    expect(userTwo.email).toEqual('moka@moka.com')
  })

  it('If an email value is present, it should not allow the "email" value to be overriden', () => {
    const userTwo = factory.create({ email: 'moka@moka.com' })
    expect(userTwo).toBeFrozen()
  })
})

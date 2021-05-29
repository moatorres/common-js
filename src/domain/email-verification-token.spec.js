import { EmailVerificationTokenBuilder } from './email-verification-token'

const builder = EmailVerificationTokenBuilder()
const tokenObj = builder.create()

describe('EmailVerificationToken Builder', () => {
  it('Should not allow modifications', () => {
    expect(tokenObj).toBeFrozen()
  })

  it('Should return a valid EmailVerificationToken object', () => {
    const tokenObject = builder.create()

    expect(tokenObject.getToken()).not.toBeNull()
    expect(tokenObject.getPrazo()).not.toBeNull()
    expect(tokenObject.prazo).toBeUndefined()
    expect(tokenObject.token).toBeUndefined()
  })

  it('Method .create() should be defined', () => {
    expect(builder.create()).toBeDefined()
  })

  it('Method .create() should return a valid immutable object with custom inputs', () => {
    const raw1 = JSON.stringify({
      token: 'A1GDADS',
      prazo: '2021-04-03T01:55:02.675Z',
    })

    // @ts-ignore
    const tokenObject1 = builder.create(raw1)

    expect(tokenObject1).toBeFrozen()
    expect(tokenObject1.getToken()).not.toBeNull()
    expect(tokenObject1.getPrazo()).not.toBeNull()
    expect(tokenObject1.prazo).toBeUndefined()
    expect(tokenObject1.token).toBeUndefined()
    expect(() => (tokenObject1.prazo = new Date())).toThrow()
    expect(() => (tokenObject1.token = 'AAAA')).toThrow()
    expect(tokenObject1.isExpired()).toBeTruthy()
    expect(tokenObject1.isValid(tokenObject1.getToken())).toBeFalsy()

    const raw2 = JSON.stringify({
      token: 'A1GDADS',
      prazo: '2025-05-05T01:55:02.675Z',
    })

    // @ts-ignore
    const tokenObject2 = builder.create(raw2)

    expect(tokenObject2).toBeFrozen()
    expect(tokenObject2.getToken()).not.toBeNull()
    expect(tokenObject2.getPrazo()).not.toBeNull()
    expect(tokenObject2.prazo).toBeUndefined()
    expect(tokenObject2.token).toBeUndefined()
    expect(() => (tokenObject2.prazo = new Date())).toThrow()
    expect(() => (tokenObject2.token = 'AAAA')).toThrow()
    expect(tokenObject2.isExpired()).toBeFalsy()
    expect(tokenObject2.isValid(tokenObject2.getToken())).toBeTruthy()
  })
})

describe('EmailVerificationToken Object', () => {
  it('Should not allow modifications', () => {
    expect(tokenObj).toBeFrozen()
  })

  it('Method .getValue() should be defined', () => {
    expect(tokenObj.getValue()).toBeDefined()
  })

  it('Method .getValue() should return a valid object', () => {
    const obj = tokenObj.getValue()
    expect(obj.prazo).not.toBeNull()
    expect(obj.token).not.toBeNull()
    expect(typeof tokenObj.getValue() === 'object').toBeTruthy()
    expect(typeof tokenObj.getValue().token === 'string').toBeTruthy()
    expect(tokenObj.getValue().prazo instanceof Date).toBeTruthy()
  })

  it('Method .getToken() should return a valid token', () => {
    const token = tokenObj.getToken()
    expect(token).not.toBeNull()
    expect(token.length).toEqual(4)
    expect(typeof tokenObj.getToken() === 'string').toBeTruthy()
  })

  it('Method .getPrazo() should return a valid date', () => {
    const prazo = tokenObj.getPrazo()
    expect(prazo).not.toBeNull()
    expect(tokenObj.getPrazo() instanceof Date).toBeTruthy()
  })

  it('Method .isExpired() should be defined', () => {
    expect(tokenObj.isExpired()).toBeDefined()
    expect(tokenObj.isExpired()).not.toBeTruthy()
    expect(typeof tokenObj.isExpired() === 'boolean').toBeTruthy()
  })

  it('Method .isValid() should be defined', () => {
    expect(tokenObj.isValid(tokenObj.getToken())).toBeDefined()
    expect(tokenObj.isValid(tokenObj.getToken())).toBeTruthy()
  })

  it('Method .toJSON() should be defined', () => {
    expect(tokenObj.toJSON()).toBeDefined()
    expect(() => JSON.parse(tokenObj.toJSON())).not.toThrow()
    expect(tokenObj.toJSON() === tokenObj.toString()).toBeTrue()
  })

  it('Method .toString() should be defined', () => {
    expect(tokenObj.toString()).toBeDefined()
    expect(() => JSON.parse(tokenObj.toString())).not.toThrow()
    expect(tokenObj.toString() === tokenObj.toJSON()).toBeTruthy()
  })
})

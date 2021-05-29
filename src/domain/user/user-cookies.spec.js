import { UserCookiesBuilder } from './user-cookies'

let builder = UserCookiesBuilder()

describe('UserCookiesBuilder', () => {
  describe('.build()', () => {
    it('Should be defined', () => {
      expect(typeof builder.build === 'function').toBeTruthy()
      expect(builder.build).toBeDefined()
    })

    it('Should have valid default values', () => {
      const cookies = builder.build()
      expect(cookies).toBeDefined()
      expect(cookies.essenciais).toEqual(true)
      expect(cookies.analytics).toEqual(false)
      expect(cookies.marketing).toEqual(false)
      expect(typeof cookies.consentido_em === new Date().toISOString())
    })
  })

  describe('.toggle()', () => {
    it('Should be defined', () => {
      expect(typeof builder.toggle === 'function').toBeTruthy()
      expect(builder.toggle).toBeDefined()
    })

    it('Should throw when receives invalid props', () => {
      // @ts-ignore
      expect(() => builder.toggle('kaboom').build()).toThrow()
    })

    it("Should change prop's value when called with valid props", () => {
      const cookies = builder.toggle('marketing').build()
      expect(cookies.marketing).toEqual(true)
    })
  })
})

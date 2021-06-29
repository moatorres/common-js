import { RegexLib } from './patterns'

describe('RegexLib', () => {
  it('Should be defined', () => {
    expect(RegexLib).toBeDefined()
  })

  describe('.Email', () => {
    it('Should be defined', () => {
      expect(RegexLib.Email).toBeDefined()
    })

    it('Should be a valid RegExp instance', () => {
      expect(RegexLib.Email instanceof RegExp).toBeTrue()
    })

    it('Should correctly test email patterns ', () => {
      expect(RegexLib.Email.test('t@t.al')).toBeTrue()
      expect(RegexLib.Email.test('test@test.co')).toBeTrue()
      expect(RegexLib.Email.test('test@test.com')).toBeTrue()
      expect(RegexLib.Email.test('test@test.house.com')).toBeTrue()
      expect(RegexLib.Email.test('123')).toBeFalse()
      expect(RegexLib.Email.test('test.com')).toBeFalse()
      expect(RegexLib.Email.test('@test.com')).toBeFalse()
      expect(RegexLib.Email.test('@test.com.io.help')).toBeFalse()
      expect(RegexLib.Email.test('test@testcom')).toBeFalse()
    })
  })

  describe('.Tel', () => {
    it('Should be defined', () => {
      expect(RegexLib.Tel).toBeDefined()
    })

    describe('.BR', () => {
      it('Should be defined', () => {
        expect(RegexLib.Tel.BR).toBeDefined()
      })

      it('Should be a valid RegExp instance', () => {
        expect(RegexLib.Tel.BR instanceof RegExp).toBeTrue()
      })

      it('Should correctly test brazilian telephone number patterns ', () => {
        expect(RegexLib.Tel.BR.test('32680000')).toBeTrue()
        expect(RegexLib.Tel.BR.test('3268-0000')).toBeTrue()
        expect(RegexLib.Tel.BR.test('3268.0000')).toBeTrue()
        expect(RegexLib.Tel.BR.test('8132680000')).toBeTrue()
        expect(RegexLib.Tel.BR.test('08132680000')).toBeTrue()
        expect(RegexLib.Tel.BR.test('81 3268 0000')).toBeTrue()
        expect(RegexLib.Tel.BR.test('81 3268-0000')).toBeTrue()
        expect(RegexLib.Tel.BR.test('81 3268.0000')).toBeTrue()
        expect(RegexLib.Tel.BR.test('(81)32680000')).toBeTrue()
        expect(RegexLib.Tel.BR.test('(81)3268 0000')).toBeTrue()
        expect(RegexLib.Tel.BR.test('(81) 3268 0000')).toBeTrue()
        expect(RegexLib.Tel.BR.test('(81)3268.0000')).toBeTrue()
        expect(RegexLib.Tel.BR.test('(81)3268-0000')).toBeTrue()
        expect(RegexLib.Tel.BR.test('91230000')).toBeTrue()
        expect(RegexLib.Tel.BR.test('9123-0000')).toBeTrue()
        expect(RegexLib.Tel.BR.test('9123.0000')).toBeTrue()
        expect(RegexLib.Tel.BR.test('991230000')).toBeTrue()
        expect(RegexLib.Tel.BR.test('99123-0000')).toBeTrue()
        expect(RegexLib.Tel.BR.test('99123.0000')).toBeTrue()
        expect(RegexLib.Tel.BR.test('81  3268 0000')).toBeFalse()
        expect(RegexLib.Tel.BR.test('81) 3268 0000')).toBeFalse()
        expect(RegexLib.Tel.BR.test('(81) 3268  0000')).toBeFalse()
        expect(RegexLib.Tel.BR.test('(81)  3268.0000')).toBeFalse()
        expect(RegexLib.Tel.BR.test('(081)32680000')).toBeFalse()
        expect(RegexLib.Tel.BR.test('000991230000')).toBeFalse()
      })
    })
  })

  describe('.CPF', () => {
    it('Should be defined', () => {
      expect(RegexLib.CPF).toBeDefined()
    })

    it('Should be a valid RegExp instance', () => {
      expect(RegexLib.CPF instanceof RegExp).toBeTrue()
    })

    it('Should correctly test brazilian CPF strings', () => {
      expect(RegexLib.CPF.test('00000000000')).toBeTrue()
      expect(RegexLib.CPF.test('000000000-00')).toBeTrue()
      expect(RegexLib.CPF.test('000.000.000-00')).toBeTrue()

      expect(RegexLib.CPF.test('000.000.000.00')).toBeFalse()
      expect(RegexLib.CPF.test('000-000-000.00')).toBeFalse()
      expect(RegexLib.CPF.test('000-000-000-00')).toBeFalse()
    })
  })

  describe('.DDMMYYYY', () => {
    it('Should be defined', () => {
      expect(RegexLib.DDMMYYYY).toBeDefined()
    })

    it('Should be a valid RegExp instance', () => {
      expect(RegexLib.DDMMYYYY instanceof RegExp).toBeTrue()
    })

    it('Should correctly test DDMMYYYY date strings', () => {
      expect(RegexLib.DDMMYYYY.test('01 01 0001')).toBeTrue()
      expect(RegexLib.DDMMYYYY.test('01 01 1900')).toBeTrue()
      expect(RegexLib.DDMMYYYY.test('01-01-1900')).toBeTrue()
      expect(RegexLib.DDMMYYYY.test('01/01/1900')).toBeTrue()
      expect(RegexLib.DDMMYYYY.test('31/12/1900')).toBeTrue()
      expect(RegexLib.DDMMYYYY.test('12/31/1900')).toBeFalse()
      expect(RegexLib.DDMMYYYY.test('01 01/1900')).toBeFalse()
      expect(RegexLib.DDMMYYYY.test('01111900')).toBeFalse()
    })
  })

  describe('.HexColor', () => {
    it('Should be defined', () => {
      expect(RegexLib.HexColor).toBeDefined()
    })

    it('Should be a valid RegExp instance', () => {
      expect(RegexLib.HexColor instanceof RegExp).toBeTrue()
    })

    it('Should accept only hexadecimal values, including "#" or not, with 3 or 6 characters', () => {
      expect(RegexLib.HexColor.test('3')).toBeFalse()
      expect(RegexLib.HexColor.test('33')).toBeFalse()
      expect(RegexLib.HexColor.test('33333')).toBeFalse()
      expect(RegexLib.HexColor.test('#3')).toBeFalse()
      expect(RegexLib.HexColor.test('#33')).toBeFalse()
      expect(RegexLib.HexColor.test('333')).toBeTrue()
      expect(RegexLib.HexColor.test('333333')).toBeTrue()
      expect(RegexLib.HexColor.test('fafafa')).toBeTrue()
      expect(RegexLib.HexColor.test('cbff10')).toBeTrue()
      expect(RegexLib.HexColor.test('#333')).toBeTrue()
      expect(RegexLib.HexColor.test('#010101')).toBeTrue()
      expect(RegexLib.HexColor.test('#cbff10')).toBeTrue()
      expect(RegexLib.HexColor.test('#fafafa')).toBeTrue()
    })
  })

  describe('.Slug', () => {
    it('Should be defined', () => {
      expect(RegexLib.Slug).toBeDefined()
    })

    it('Should be a valid RegExp instance', () => {
      expect(RegexLib.Slug instanceof RegExp).toBeTrue()
    })

    it('Should accept only lowercase letters, numbers and hífen symbols', () => {
      expect(RegexLib.Slug.test('new')).toBeTrue()
      expect(RegexLib.Slug.test('newblog')).toBeTrue()
      expect(RegexLib.Slug.test('newblogpost')).toBeTrue()
      expect(RegexLib.Slug.test('new-blog')).toBeTrue()
      expect(RegexLib.Slug.test('new-blogpost')).toBeTrue()
      expect(RegexLib.Slug.test('new-blog-post')).toBeTrue()
      expect(RegexLib.Slug.test('new-blog-post2020')).toBeTrue()
      expect(RegexLib.Slug.test('new-blog-post-2020')).toBeTrue()
      expect(RegexLib.Slug.test('new-blog-post.2020')).toBeFalse()
      expect(RegexLib.Slug.test('new-blog-post./2020')).toBeFalse()
      expect(RegexLib.Slug.test('new-blog=post.=/2020')).toBeFalse()
      expect(RegexLib.Slug.test('new//blog=post.=/2020')).toBeFalse()
      expect(RegexLib.Slug.test('new___blog=post.=/2020')).toBeFalse()
    })
  })

  describe('.ThousandSeparator', () => {
    it('Should be defined', () => {
      expect(RegexLib.ThousandSeparator).toBeDefined()
    })

    it('Should be a valid RegExp instance', () => {
      expect(RegexLib.ThousandSeparator instanceof RegExp).toBeTrue()
    })

    it('Should capture groups that represent thousands in string-number values', () => {
      let dozens = RegexLib.ThousandSeparator.exec('10')
      let hundreds = RegexLib.ThousandSeparator.exec('100')
      let thousands = RegexLib.ThousandSeparator.exec('1000')
      let millions = RegexLib.ThousandSeparator.exec('1000000000')
      expect(dozens).toBeNull()
      expect(hundreds).toBeNull()
      expect(thousands?.toString()).toEqual('1,000')
      expect(thousands?.length).toEqual(2)
      expect(millions?.toString()).toEqual('000,000')
      expect(millions?.length).toEqual(2)
    })
  })

  describe('.ModeratePassword', () => {
    it('Should be defined', () => {
      expect(RegexLib.ModeratePassword).toBeDefined()
    })

    it('Should be a valid RegExp instance', () => {
      expect(RegexLib.ModeratePassword instanceof RegExp).toBeTrue()
    })

    it('Should have at least 1 lowercase, 1 uppercase, 1 number and 8 characters long', () => {
      let weakPasswords = [
        'abc123123',
        'Abc123',
        '123123123',
        'B@#Ab%$1B@#Ab%$1',
      ]

      let moderatePasswords = [
        'Abc12345',
        'Aa123456',
        'B@#Ab%$1',
        'B@#Ab%$1B@#Ab%$1',
      ]

      let weak = weakPasswords.every((v) => RegexLib.ModeratePassword.test(v))
      let moderate = moderatePasswords.every((v) =>
        RegexLib.ModeratePassword.test(v)
      )

      expect(weak).toBeFalse()
      expect(moderate).toBeTrue()
    })
  })

  describe('.StrongPassword', () => {
    it('Should be defined', () => {
      expect(RegexLib.StrongPassword).toBeDefined()
    })

    it('Should be a valid RegExp instance', () => {
      expect(RegexLib.StrongPassword instanceof RegExp).toBeTrue()
    })

    it('Should have 1 lowercase, 1 uppercase, 1 number, 1 special and at least 8 characters long', () => {
      let weakPasswords = [
        'Abc12345',
        'A@123456',
        'B@#Ab%$1',
        'B@#Ab%$1B@#Ab%$1',
      ]

      let strongPassowords = ['12345@Ab', 'B@#Ab%$1', 'B@#Ab%$1B@#Ab%$1']

      let weak = weakPasswords.every((v) => RegexLib.StrongPassword.test(v))
      let strong = strongPassowords.every((v) =>
        RegexLib.StrongPassword.test(v)
      )

      expect(weak).toBeFalse()
      expect(strong).toBeTrue()
    })
  })
})

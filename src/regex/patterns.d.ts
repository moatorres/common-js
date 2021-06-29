interface IRegexLib {
  Email: RegExp
  Tel: {
    BR: RegExp
  }
  CPF: RegExp
  DDMMYYYY: RegExp
  HexColor: RegExp
  Slug: RegExp
  ThousandSeparator: RegExp
  ModeratePassword: RegExp
  StrongPassword: RegExp
}

export const RegexLib: IRegexLib

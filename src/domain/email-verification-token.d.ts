type TokenObject = {
  token: string
  prazo: string | Date
}

interface EmailVerificationToken {
  getValue: () => TokenObject
  getToken: () => string
  getPrazo: () => string | Date
  isExpired: () => boolean
  isValid: (code: string) => boolean
  toJSON: () => string
  toString: () => string
  token?: string
  prazo?: string | Date
}

export function EmailVerificationTokenBuilder(): {
  create: (customToken?: TokenObject) => EmailVerificationToken
}

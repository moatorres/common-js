interface IUserEmail {
  email: string
}

interface IUserEmailBuilder {
  setEmail: (email: string) => IUserEmailBuilder
  build: () => IUserEmail
}

interface IUserEmailFactory {
  create: ({}: IUserEmail) => IUserEmail
}

export function makeUserEmailFactory(): IUserEmailFactory
export function userEmailBuilder(): IUserEmailBuilder

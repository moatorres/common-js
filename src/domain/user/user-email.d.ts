interface IUserEmail {
  email: string
}

interface IUserEmailBuilder {
  setEmail: (email: string) => IUserEmailBuilder | Error
  build: () => IUserEmail | Error
}

interface IUserEmailFactory {
  create: ({}: IUserEmail) => IUserEmail | Error
}

export function makeUserEmailFactory(): IUserEmailFactory
export function userEmailBuilder(): IUserEmailBuilder

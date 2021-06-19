interface IUserNome {
  primeiro_nome: string
  ultimo_nome: string
}

interface IUserNomeDTO {
  nome: string
  sobrenome: string
}

interface IUserNomeBuilder {
  setNome: (nome: string) => IUserNomeBuilder | Error
  setSobrenome: (sobrenome: string) => IUserNomeBuilder | Error
  build: () => IUserNome | Error
}

interface IUserNomeFactory {
  create: ({}: IUserNomeDTO) => IUserNome | Error
}

export function makeUserNomeFactory(): IUserNomeFactory
export function UserNomeBuilder(): IUserNomeBuilder

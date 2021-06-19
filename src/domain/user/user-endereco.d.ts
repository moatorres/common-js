interface IEndereco {
  bairro: string
  cidade: string
  estado: string
}

interface IEnderecoBuilder {
  setBairro: (bairro: string) => IEnderecoBuilder | Error
  setCidade: (cidade: string) => IEnderecoBuilder | Error
  setEstado: (estado: string) => IEnderecoBuilder | Error
  setConta: (conta: string) => IEnderecoBuilder | Error
  build: () => IEndereco | Error
}

interface IEnderecoFactory {
  create: ({}: IEndereco) => IEndereco | Error
}

export function makeEnderecoFactory(): IEnderecoFactory
export function EnderecoBuilder(): IEnderecoBuilder

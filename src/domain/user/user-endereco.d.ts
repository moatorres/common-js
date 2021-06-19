interface IEndereco {
  bairro: string
  cidade: string
  estado: string
}

interface IEnderecoBuilder {
  setBairro: (bairro: string) => IEnderecoBuilder
  setCidade: (cidade: string) => IEnderecoBuilder
  setEstado: (estado: string) => IEnderecoBuilder
  setConta: (conta: string) => IEnderecoBuilder
  build: () => IDadosBancarios
}

interface IEnderecoFactory {
  create: ({}: IEndereco) => IEndereco
}

export function makeEnderecoFactory(): IEnderecoFactory
export function EnderecoBuilder(): IEnderecoBuilder

interface IDadosBancarios {
  banco: string
  agencia: string
  tipo_de_conta: string
  numero_da_conta: string
}

interface IDadosBancariosDTO {
  banco: string
  agencia: string
  tipoDeConta: string
  numeroDaConta: string
}

interface IDadosBancariosBuilder {
  setBanco: (banco: string) => DadosBancariosBuilder | Error
  setAgencia: (agencia: string) => DadosBancariosBuilder | Error
  setTipo: (tipo: string) => DadosBancariosBuilder | Error
  setConta: (conta: string) => DadosBancariosBuilder | Error
  build: () => IDadosBancarios | Error
}

interface IDadosBancariosFactory {
  create: ({}: IDadosBancariosDTO) => IDadosBancarios | Error
}

export function makeDadosBancariosFactory(): IDadosBancariosFactory
export function DadosBancariosBuilder(): IDadosBancariosBuilder

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
  setBanco: (banco: string) => DadosBancariosBuilder
  setAgencia: (agencia: string) => DadosBancariosBuilder
  setTipo: (tipo: string) => DadosBancariosBuilder
  setConta: (conta: string) => DadosBancariosBuilder
  build: () => IDadosBancarios
}

interface IDadosBancariosFactory {
  create: ({}: IDadosBancariosDTO) => IDadosBancarios
}

export function makeDadosBancariosFactory(): IDadosBancariosFactory
export function DadosBancariosBuilder(): IDadosBancariosBuilder

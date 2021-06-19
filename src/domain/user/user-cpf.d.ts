interface UserCPF {
  cpf: string
}

interface CPFBuilderProps {
  setCPF: (cpf: string) => CPFBuilder | Error
  build: () => UserCPF | Error
}

interface CPFFactoryProps {
  create: ({ cpf: string }) => UserCPF | Error
}

export function CPFBuilder(): CPFBuilderProps
export function makeCPF(): CPFFactoryProps

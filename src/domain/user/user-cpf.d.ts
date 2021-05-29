interface UserCPF {
  cpf: string
}

interface CPFBuilderProps {
  setCPF: (cpf: string) => CPFBuilder
  build: () => UserCPF
}

interface CPFFactoryProps {
  create: ({ cpf: string }) => UserCPF
}

export function CPFBuilder(): CPFBuilderProps
export function makeCPFFactory(): CPFFactoryProps

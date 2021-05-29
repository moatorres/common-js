interface UserCookies {
  essenciais: boolean
  analytics: boolean
  marketing: boolean
  consentido_em: Date
}

type UserCookiesProps = 'analytics' | 'essenciais' | 'marketing'

interface UserCookiesBuilderProps {
  toggle: (props: UserCookiesProps) => UserCookiesBuilder
  build: () => UserCookies
}

export function UserCookiesBuilder(): UserCookiesBuilderProps
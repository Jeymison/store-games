import { ButtonContainer, ButtonLink } from './styles'

export type Props = {
  type: 'button' | 'link'
  title: string
  to?: string //Para enviar para algum link e caminho
  onclick?: () => void //Para receber uma funcao
  children: string
  variant?: 'primary' | 'secondary'
}

const Button = ({
  type,
  title,
  to,
  onclick,
  children,
  variant = 'primary'
}: Props) => {
  if (type === 'button') {
    return (
      <ButtonContainer
        variant={variant}
        type="button"
        title={title}
        onClick={onclick}
      >
        {children}
      </ButtonContainer>
    )
  }
  return (
    <ButtonLink to={to as string} title={title}>
      {children}
    </ButtonLink>
  )
}

export default Button

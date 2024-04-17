import { BotaoContainer, ButtonLink } from './styles'

type Props = {
  type: 'button' | 'link'
  title: string
  to?: string //Para enviar para algum link e caminho
  onclick?: () => void //Para receber uma funcao
  children: string
}

const Button = ({ type, title, to, onclick, children }: Props) => {
  if (type === 'button') {
    return (
      <BotaoContainer type="button" title={title} onClick={onclick}>
        {children}
      </BotaoContainer>
    )
  }
  return (
    <ButtonLink to={to as string} title={title}>
      {children}
    </ButtonLink>
  )
}

export default Button

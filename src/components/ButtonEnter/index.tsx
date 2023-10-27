import { StyledButton } from './styles'

type Props = {
  text: string
  variant: 'login' | 'faleConosco'
  onClick: () => void
}

export function Button({ text, variant, onClick }: Props) {
  return (
    <StyledButton type="button" variant={variant} onClick={onClick}>
      {text}
    </StyledButton>
  )
}

import { Button } from '../ButtonEnter'
import hands from '../../assets/images/hands.png'
import { FaleConoscoStyle, FaleConoscoTextStyle } from './styles'

export function FaleConosco() {
  return (
    <FaleConoscoStyle>
      <img src={hands} />
      <FaleConoscoTextStyle>
        Precisando de <span>ajuda ou suporte</span> em algo?
      </FaleConoscoTextStyle>
      <Button
        text="Fale conosco"
        variant="faleConosco"
        onClick={function () {
          throw new Error('')
        }}
      />
    </FaleConoscoStyle>
  )
}

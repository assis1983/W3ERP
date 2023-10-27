import { ChartLine } from '../../assets/icons/chart-line'
import { FacialCleanser } from '@/assets/icons/facial-cleanser'
import { Logo } from '../../assets/icons/logo'
import { PieTwo } from '../../assets/icons/pie-two'
import { FaleConosco } from '../Contact'
import { MenuItem } from '../Menu'
import { LogoContainer, MenuSidebarStyle, MenuContainer } from './styles'
import { colors } from '../../theme/index'

const Itens = [
  {
    icon: <PieTwo />,
    text: 'Dashboard',
    url: '/'
  },
  {
    icon: <ChartLine />,
    text: 'Predições',
    url: '/predicoes'
  },
  {
    icon: <FacialCleanser color={colors.white} />,
    text: 'Produtos',
    url: '/produtos'
  }
]

export function MenuSidebar() {
  return (
    <MenuSidebarStyle>
      <div>
        <LogoContainer>
          <Logo />
        </LogoContainer>

        <MenuContainer>
          {Itens.map(index => (
            <MenuItem icon={index.icon} text={index.text} url={index.url} />
          ))}
        </MenuContainer>
      </div>

      <FaleConosco />
    </MenuSidebarStyle>
  )
}

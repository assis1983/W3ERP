import { FacialCleanser } from '../../assets/icons/facial-cleanser'
import { Variant } from '../../types/types'
import { colors } from '../../theme'
import { EveryUser } from '../../assets/icons/Every-user'
import { TredingDown } from '../../assets/icons/trending-down'
import { TrendingUp } from '../../assets/icons/trending-up'
import { History } from '../../assets/icons/history'

type CardTitleInfo = Record<
  Variant,
  {
    text: string
    icon: JSX.Element
    color: string
  }
>

export const CardTitleVariants: CardTitleInfo = {
  products: {
    text: 'Produtos',
    icon: <FacialCleanser color={colors.blue} />,
    color: colors.tablePurple
  },
  clients: {
    text: 'Clientes',
    icon: <EveryUser />,
    color: colors.blue
  },
  history: {
    text: 'Histórico',
    icon: <History />,
    color: colors.grey
  },
  runningOut: {
    text: 'Produtos esgotando',
    icon: <FacialCleanser color={colors.warning} />,
    color: colors.lightRed
  },
  clientsUp: {
    text: 'Clientes em alta',
    icon: <TrendingUp />,
    color: colors.success
  },
  clientsDown: {
    text: 'Clientes em baixa',
    icon: <TredingDown />,
    color: colors.warning
  },
  productsUp: {
    text: 'Produtos em alta',
    icon: <TrendingUp />,
    color: colors.success
  },
  productsDown: {
    text: 'Produtos em baixa',
    icon: <TredingDown />,
    color: colors.warning
  }
}

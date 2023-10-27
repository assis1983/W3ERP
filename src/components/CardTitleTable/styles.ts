import styled, { css } from 'styled-components'
import { colors } from '../../theme/index'

export const TableCardTitleStyle = styled.div<{
  variant:
    | 'products'
    | 'clients'
    | 'clientsDown'
    | 'clientsUp'
    | 'history'
    | 'runningOut'
    | 'productsUp'
    | 'productsDown'
}>`
  display: flex;
  align-items: center;
  gap: 15px;

  .iconDiv {
    height: 50px;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;

    ${({ variant }) => {
      switch (variant) {
        case 'products':
          return css`
            background-color: ${colors.tablePurple};
          `
        case 'clients':
          return css`
            background-color: ${colors.blue};
          `
        case 'history':
          return css`
            background-color: ${colors.grey};
          `
        case 'runningOut':
          return css`
            background-color: ${colors.lightRed};
          `
        case 'clientsDown' || 'productsDown':
          return css`
            background-color: ${colors.warning};
          `
        case 'clientsUp' || 'productsUp':
          return css`
            background-color: ${colors.success};
          `
        case 'productsDown':
          return css`
            background-color: ${colors.warning};
          `
        case 'productsUp':
          return css`
            background-color: ${colors.success};
          `
        default:
          return css`
            background-color: ${colors.tablePurple};
          `
      }
    }}
  }

  .titleDiv {
    color: ${({ variant }) => variant === 'runningOut' && `${colors.warning}`};
  }
`

import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors } from '../../theme'

export const MenuItemStyle = styled(Link)`
  text-decoration: none;
  color: ${colors.white};
  display: flex;
  padding: 1rem 0.5rem;
  gap: 20px;
  border-radius: 8px;

  &:hover {
    background-color: ${colors.blueHighlight};
  }
`

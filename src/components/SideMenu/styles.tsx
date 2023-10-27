import styled from 'styled-components'
import { colors } from '../../theme'

export const MenuSidebarStyle = styled.div`
  background-color: ${colors.blue};
  color: ${colors.white};
  width: 271px;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 20rem;
  .Link {
    text-decoration: none;
    color: white;
  }
`

export const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 2.5rem 0;
`

export const MenuContainer = styled.div`
  gap: 1.5rem;
  padding: 10px;
`

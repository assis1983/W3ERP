import styled from 'styled-components'
import { colors } from '../../theme'

export const SearchInputStyle = styled.div`
  padding: 1rem;

  input {
    font-size: 20px;
    width: 400px;
    padding: 1rem;
    border-radius: 16px;
    border: 1px solid ${colors.deepBlue};
  }

  .searchIcon {
    position: absolute;
    top: 63px;
    left: 390px;
    background-color: ${colors.white};
  }
`

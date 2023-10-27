import styled, { css } from 'styled-components'
import { colors } from '../../theme'

export const ToggleViewStyle = styled.div<{ switchOn: boolean }>`
  display: flex;
  width: 251px;
  height: 40px;
  padding: 5px;
  border: solid 1px #e0e0e0;
  gap: 3px;
  background-color: ${colors.grey};
  border-radius: 8px;

  button {
    width: 100%;
    border: none;
    border-radius: 8px;
    color: ${colors.white};
    font-size: 14px;
    background-color: ${colors.grey};
  }

  ${({ switchOn }) => {
    switch (switchOn) {
      case true:
        return css`
          .up {
            background-color: ${colors.success};
          }

          .down {
            background-color: ${colors.grey};
            color: #9e9e9e;
          }
        `
      case false:
        return css`
          .up {
            background-color: ${colors.grey};
            color: #9e9e9e;
          }

          .down {
            background-color: ${colors.warning};
          }
        `
      default:
        return css`
          .up {
            background-color: ${colors.grey};
            color: #9e9e9e;
          }

          .down {
            background-color: ${colors.grey};
            color: #9e9e9e;
          }
        `
    }
  }}
`

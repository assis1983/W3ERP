import styled from 'styled-components'
import { colors } from '../../theme'

export const MainHeaderStyle = styled.div`
  background-color: ${colors.blue};
  color: white;
  border-radius: 24px;
  padding: 1rem;
  margin-top: 1rem;

  .upperDiv {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;

    p {
      padding: 1rem;
      font-family: Sora;
      font-size: 32px;
      font-weight: 600;
    }
  }

  .cards {
    display: flex;
    justify-content: space-evenly;
  }

  .predictionsHeader {
    padding: 1rem;
  }

  .predictionsHeaderTitle {
    color: ${colors.white};
    font-weight: 600;
    font-family: Sora;
    font-size: 32px;
    align-items: baseline;
  }

  .predictionsHeaderSubtitle {
    color: ${colors.white};
    font-weight: 400;
    font-family: Sora;
    font-size: 16px;
    display: flex;
    align-items: baseline;
    padding: 1rem;
    gap: 20px;
  }

  .subtitles {
    display: flex;
    gap: 10px;
  }
`

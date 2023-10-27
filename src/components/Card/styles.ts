import styled from 'styled-components'

export const CustomCardTitle = styled.div<{ customCardColor: string }>`
  display: flex;
  align-items: center;
  gap: 15px;

  .customIcone {
    height: 50px;
    width: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background-color: ${({ customCardColor }) => customCardColor};
  }
`

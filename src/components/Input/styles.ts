import styled from 'styled-components'

export const InputCheckbox = styled.div`
  position: relative;
  padding: 0.5rem;

  input:hover {
    border: 1px solid purple;
    color: purple;
  }

  &.success input:focus {
    border: 1px solid purple;
    color: purple;
  }

  &.success {
    input {
      border: 1px solid #00c247;
    }

    label,
    input {
      color: #00c247;
    }
  }

  input {
    height: 4rem;
    width: 35rem;
    border: 3px solid #e0e0e0;
    border-radius: 16px;
    padding: 1.5rem;
    color: #e0e0e0;
    outline: none;
  }

  label {
    font-size: 16px;
    position: absolute;
    left: 25px;
    top: -5px;
    padding: 2px;
    background: white;
  }

  .eyeIconDiv {
    position: absolute;
    right: 3rem;
    top: 2rem;
  }
`

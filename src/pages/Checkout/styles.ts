import styled from 'styled-components'

export const FormContainer = styled.div`
  padding: 0 1rem;
  padding: 0 1rem;
`

export const Title = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;

  p:first-child {
    font-size: 1rem;
    color: ${(props) => props.theme['base-subtile']};
  }
  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']};
    line-height: 130%;
  }
`
export const Form = styled.form`
  display: grid;
  row-gap: 0.75rem;
  column-gap: 2rem;
  padding: 1rem 0 2.5rem 0;
  grid-template-columns: 1fr max-content;
`

export const FormAdress = styled.div`
  padding: 2.5rem;
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 8px;
  grid-column: 1 /-1;
  display: grid;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 900px) {
    grid-column: 1;
  }

  input {
    border: none;
    box-shadow: inset 0px 0px 0px 1px ${(props) => props.theme['base-button']};
    background-color: ${(props) => props.theme['base-input']};

    border-radius: 4px;
    padding: 0.75rem;
    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }

  & input + span {
    margin-bottom: 0rem;
    padding-left: 0.3rem;
    color: ${(props) => props.theme.yellow};
  }

  input[name='cep'] {
    width: 12.5rem;
  }

  .two-inputs {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    @media (min-width: 900px) {
      grid-template-columns: minmax(100px, 200px) 1fr;
    }

    & span {
      grid-row: 2;
      padding-left: 0.3rem;
      color: ${(props) => props.theme.yellow};
    }
  }

  .three-inputs {
    display: grid;
    grid-template-columns: 1fr;

    gap: 1rem;
    & span {
      grid-row: 2;
      padding-left: 0.3rem;
      color: ${(props) => props.theme.yellow};
    }

    @media (min-width: 1060px) {
      grid-template-columns: minmax(100px, 200px) 1fr 60px;
    }
  }
`

export const FormPayment = styled.div`
  padding: 2.5rem;
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  gap: 1rem;
  grid-row: 2;
  grid-column: 1 / -1;
  @media (min-width: 900px) {
    grid-column: 1;
  }
`

export const PaymentSelection = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
    border-radius: 6px;
    font-size: 0.75rem;
    text-transform: uppercase;
    padding: 1rem 0;
    border: none;
    background-color: ${(props) => props.theme['base-button']};
    transition: background-color 300ms ease-in-out;

    &:hover {
      background-color: ${(props) => props.theme['base-hover']};
    }
    &:focus {
      background-color: ${(props) => props.theme['purple-light']};
    }
  }
`

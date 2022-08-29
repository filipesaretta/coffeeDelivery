import styled from 'styled-components'

export const FormContainer = styled.div`
  /* width: 640px; */
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
  grid-template-columns: 1fr 1fr;
`

export const FormAdress = styled.div`
  padding: 2.5rem;
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  gap: 1rem;

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
  input[name='cep'] {
    width: 12.5rem;
  }

  .two-inputs {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    @media (min-width: 540px) {
      grid-template-columns: 200px 1fr;
    }
  }

  .three-inputs {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;

    @media (min-width: 640px) {
      grid-template-columns: 200px 1fr 60px;
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
`

export const PaymentSelection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;

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

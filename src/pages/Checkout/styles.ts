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

export const CartContainer = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  border-radius: 6px;
  border-top-right-radius: 44px;
  border-bottom-left-radius: 44px;
  display: grid;
`

export const CartItems = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr;
  gap: 1.25rem;
  border-bottom: 1px solid #e6e5e5;
  padding-bottom: 2rem;
  align-self: start;
  img {
    width: 64px;
  }
  p:last-child {
    font-size: 1rem;
    font-weight: bold;
    color: ${(props) => props.theme['base-text']};
  }
`

export const AddorRemoveItem = styled.div`
  line-height: 130%;
  grid-column: 2;
  gap: 0.5rem;
  display: grid;

  p {
    /* font-weight: bold; */
    color: ${(props) => props.theme['base-subtile']};
  }
`

export const CartSize = styled.div`
  display: flex;
  grid-row: 2;
  grid-column: 1;
  gap: 0.5rem;
  font-size: 0.75rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.5rem;
    border-radius: 8px;
    background-color: ${(props) => props.theme['base-button']};

    svg {
      cursor: pointer;
    }
    color: ${(props) => props.theme.purple};

    span {
      color: ${(props) => props.theme['base-title']};
      font-size: 1rem;
    }
    &:last-child {
      cursor: pointer;
    }
  }
`

export const Price = styled.p`
  grid-column: 3;
  grid-row: 1;
  align-self: start;
`
export const OrderSummary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-self: end;
  color: ${(props) => props.theme['base-text']};

  table {
    display: flex;
    justify-content: space-between;

    thead {
      text-align: left;
      tr {
        display: flex;
        gap: 0.75rem;
        flex-direction: column;
        font-weight: 400;
        th:last-child {
          color: ${(props) => props.theme['base-subtile']};
          font-size: 1.25rem;
          font-weight: bold;
        }
      }
    }
    tbody {
      text-align: right;
      tr {
        gap: 0.75rem;
        display: flex;
        flex-direction: column;
        td:last-child {
          color: ${(props) => props.theme['base-subtile']};
          font-weight: bold;
          font-size: 1.25rem;
        }
      }
    }
  }
  button {
    padding: 0.75rem 0;
    background: ${(props) => props.theme.yellow};

    font-size: 0.875rem;
    font-weight: bold;

    border: none;
    border-radius: 6px;
    color: white;
    text-transform: uppercase;

    transition: background ease 300ms;

    &:hover {
      background: ${(props) => props.theme['yellow-dark']};
    }
  }
`

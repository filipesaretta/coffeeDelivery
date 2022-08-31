import styled from 'styled-components'

export const CartItemsContainer = styled.div`
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

export const Items = styled.div`
  line-height: 130%;
  grid-column: 2;
  gap: 0.5rem;
  display: grid;

  p {
    /* font-weight: bold; */
    color: ${(props) => props.theme['base-subtile']};
  }
`

export const Quantity = styled.div`
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
    border: none;
    svg {
      cursor: pointer;
    }
    color: ${(props) => props.theme.purple};

    span {
      color: ${(props) => props.theme['base-title']};
      font-size: 1rem;
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.5rem;
    border-radius: 8px;
    background-color: ${(props) => props.theme['base-button']};
    border: none;
    svg {
      cursor: pointer;
    }
    color: ${(props) => props.theme.purple};

    span {
      color: ${(props) => props.theme['base-title']};
      font-size: 1rem;
    }
  }
`

export const Price = styled.p`
  grid-column: 3;
  grid-row: 1;
  align-self: start;
`

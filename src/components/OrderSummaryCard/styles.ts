import styled from 'styled-components'

export const OrderSummaryContainer = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  border-radius: 6px;
  border-top-right-radius: 44px;
  border-bottom-left-radius: 44px;
  display: grid;
`

export const ItemsContainer = styled.div`
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

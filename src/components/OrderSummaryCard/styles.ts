import styled from 'styled-components'

export const OrderSummaryContainer = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  border-radius: 6px;
  border-top-right-radius: 44px;
  border-bottom-left-radius: 44px;
  display: grid;
  align-self: baseline;
  grid-column: 1 / -1;
  grid-row: 3;
  @media (min-width: 900px) {
    grid-column: 2;
    grid-row: 1;
  }
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
`

export const ConfirmButton = styled.button`
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
`

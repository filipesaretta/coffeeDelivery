import styled from 'styled-components'

export const DeliveryContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(320px, 526px) max-content;
  justify-content: space-between;
  row-gap: 2.4rem;
`

export const Title = styled.div`
  grid-column: 1 / -1;
  grid-row: 1;
  h1 {
    font-size: 2rem;
    font-family: 'Baloo 2', sans-serif;
    line-height: 130%;
    color: ${(props) => props.theme['yellow-dark']};
    font-weight: bold;
  }
  p {
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtile']};
  }
`
export const AddressContainer = styled.div`
  border: solid ${(props) => props.theme['yellow-dark']} 2px;
  border-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;

  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    span {
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${(props) => props.theme.white};
      min-height: 2rem;
      min-width: 2rem;
      border-radius: 100%;

      &.location {
        background-color: ${(props) => props.theme.purple};
      }
      &.timer {
        background-color: ${(props) => props.theme.yellow};
      }
      &.money {
        background-color: ${(props) => props.theme['yellow-dark']};
      }
    }
  }
`

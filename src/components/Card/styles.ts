import styled from 'styled-components'
import { button } from '../Header/styles'

export const CardContainer = styled.div`
  width: 256px;
  height: 310px;
  background-color: ${(props) => props.theme['base-card']};

  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 36px;
  position: relative;
  display: grid;
  padding: 0 1.25rem;
`

export const CoffeeDiv = styled.div`
  display: grid;
  /* gap: 0.5rem; */
  justify-items: center;

  img {
    justify-self: center;
    margin-top: -1.25rem;
  }
`
export const TagContainer = styled.div`
  justify-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
`
export const Tag = styled.button`
  border-radius: 100px;
  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  text-transform: uppercase;
  border: none;
  padding: 0.25rem 0.5rem;
  font-weight: 700;
  font-size: 0.625rem;
  line-height: 130%;
`
export const CoffeeTitle = styled.div`
  text-align: center;
  line-height: 130%;
  h2 {
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtile']};
    font-family: 'Baloo 2', sans-serif;
  }
  p {
    color: ${(props) => props.theme['base-label']};
    font-size: 0.875rem;
  }
`
export const BuySection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1.25rem;

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']};

    span {
      font-size: 1.5rem;
      font-weight: 900;
      font-family: 'Baloo 2', sans-serif;
    }
  }
`

export const AddToCart = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const Cart = styled(button)`
  background-color: ${(props) => props.theme['purple-dark']};
  color: ${(props) => props.theme.white};
`
export const CounterCoffee = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem;
  border-radius: 8px;
  background-color: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme.purple};
  svg {
    cursor: pointer;
  }
  span {
    color: ${(props) => props.theme['base-title']};
    font-size: 1rem;
  }
`

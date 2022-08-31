import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 6.5rem;
`

export const MapCartContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  height: 38px;
`

export const button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;

  border-radius: 8px;
  border: none;
`

export const Location = styled(button)`
  background-color: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};
  gap: 0.25rem;

  span {
    font-size: 0.875rem;
  }
`
export const Cart = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;

  border-radius: 8px;
  border: none;

  background-color: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};

  position: relative;
  span {
    position: absolute;
    background: ${(props) => props.theme['yellow-dark']};
    width: 20px;
    height: 20px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 0.75rem;
    font-weight: bold;
    right: -0.5rem;
    top: -0.5rem;
  }
`

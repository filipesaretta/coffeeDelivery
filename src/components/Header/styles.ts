import styled from 'styled-components'

export const HeaderContainer = styled.header`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 6.5rem;
  padding: 1.5rem;
`

export const MapCartContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  height: 38px;
`

const button = styled.button`
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
export const Cart = styled(button)`
  background-color: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
`

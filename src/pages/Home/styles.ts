import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: center;
  gap: 3.5rem;
  margin-top: 3.875rem;
  padding: 0 1rem;

  @media (min-width: 900px) {
    grid-template-columns: 1fr max-content;
  }

  img {
    max-width: 100%;
    height: auto;
    justify-self: center;
  }
`

export const HomeDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.125rem;
`
export const Title = styled.div`
  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 900;
    font-size: 2.5rem;
    color: ${(props) => props.theme['base-title']};
    line-height: 130%;
  }

  p {
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtile']};
    line-height: 130%;
    margin-top: 1rem;
  }
`

export const Features = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2.5rem;
  row-gap: 1.25rem;

  p {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${(props) => props.theme['base-text']};
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.theme.white};
    min-height: 2rem;
    min-width: 2rem;
    border-radius: 100%;

    &.cart {
      background: ${(props) => props.theme['yellow-dark']};
    }
    &.timer {
      background: ${(props) => props.theme.yellow};
    }
    &.package {
      background: ${(props) => props.theme['base-text']};
    }
    &.coffee {
      background: ${(props) => props.theme.purple};
    }
  }
`

export const Catalog = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  flex-wrap: wrap;
  justify-items: center;
  gap: 2rem;
  padding: 2rem 0;

  @media (min-width: 568px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: 1160px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`

import { MapPin, ShoppingCart } from 'phosphor-react'
// import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { Cart, HeaderContainer, Location, MapCartContainer } from './styles'
import { useShoppingCartContext } from '../../contexts/ShoppingCartContext'

export function Header() {
  const { cartSize } = useShoppingCartContext()
  return (
    <HeaderContainer>
      <div>
        <img src={logo} alt="Coffee DevLivery" />
      </div>
      <MapCartContainer>
        <Location>
          <MapPin size={25} weight="fill" />
          <span>Torino, TO</span>
        </Location>
        <>
          <Cart to="/checkout">
            <ShoppingCart size={25} weight="fill" />
            <span>{cartSize()}</span>
          </Cart>
        </>
      </MapCartContainer>
    </HeaderContainer>
  )
}

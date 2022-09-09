import { ConfirmButton, OrderSummary, OrderSummaryContainer } from './styles'

import { CartItems } from '../CartItems'
import { useShoppingCartContext } from '../../contexts/ShoppingCartContext'
import storeItems from '../../data/storeItems'
import { moneyFormatter } from '../../utils/moneyFormatter'
import { useNavigate } from 'react-router-dom'
export function OrderSummaryCard() {
  const { cartItems } = useShoppingCartContext()

  const totalItemsPrice = cartItems.reduce((total, cartItem) => {
    const item = storeItems.find((i) => i.id === cartItem.id)

    return total + Number(item?.price || 0) * cartItem.quantity
  }, 0)
  const navigate = useNavigate()

  const shipping = 3.5
  const TotalAll = moneyFormatter(Number(totalItemsPrice + shipping))

  return (
    <OrderSummaryContainer>
      <>
        {cartItems.length !== 0
          ? cartItems.map((item) => <CartItems {...item} key={item.id} />)
          : navigate('/')}
      </>

      <OrderSummary>
        <table>
          <thead>
            <tr>
              <th>Totale Caffè</th>
              <th>Consegna</th>
              <th>Totale</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{moneyFormatter(totalItemsPrice)}</td>
              <td>{moneyFormatter(shipping)}</td>
              <td>{TotalAll}</td>
            </tr>
          </tbody>
        </table>
        <ConfirmButton>Confermare la Richiesta</ConfirmButton>
      </OrderSummary>
    </OrderSummaryContainer>
  )
}

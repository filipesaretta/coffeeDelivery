import { ConfirmButton, OrderSummary, OrderSummaryContainer } from './styles'

import { CartItems } from '../CartItems'
import { useShoppingCartContext } from '../../contexts/ShoppingCartContext'
import storeItems from '../../data/storeItems.json'
import { moneyFormatter } from '../../utils/moneyFormatter'
import { useNavigate } from 'react-router-dom'
export function OrderSummaryCard() {
  const { cartItems } = useShoppingCartContext()

  const totalItemsPrice = cartItems.reduce((total, cartItem) => {
    const item = storeItems.find((i) => i.id === cartItem.id)

    return total + Number(item?.price || 0) * cartItem.quantity
  }, 0)
  console.log(!!cartItems)
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
              <th>Total de itens</th>
              <th>Entrega</th>
              <th>Total</th>
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
        <ConfirmButton>confirmar pedido</ConfirmButton>
      </OrderSummary>
    </OrderSummaryContainer>
  )
}

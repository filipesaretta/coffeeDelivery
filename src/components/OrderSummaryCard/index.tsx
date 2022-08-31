import { OrderSummary, OrderSummaryContainer } from './styles'

import { CartItems } from '../CartItems'
import { useShoppingCartContext } from '../../contexts/ShoppingCartContext'
import storeItems from '../../data/storeItems.json'
import { moneyFormatter } from '../../utils/moneyFormatter'
export function OrderSummaryCard() {
  const { cartItems } = useShoppingCartContext()

  const totalItemsPrice = cartItems.reduce((total, cartItem) => {
    const item = storeItems.find((i) => i.id === cartItem.id)

    return total + Number(item?.price || 0) * cartItem.quantity
  }, 0)

  const shipping = 3.5
  const TotalAll = moneyFormatter(Number(totalItemsPrice + shipping))

  return (
    <OrderSummaryContainer>
      {cartItems.map((item) => {
        return <CartItems {...item} key={item.id} />
      })}

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
        <button>confirmar pedido</button>
      </OrderSummary>
    </OrderSummaryContainer>
  )
}

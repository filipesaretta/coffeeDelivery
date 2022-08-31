import { OrderSummary, OrderSummaryContainer } from './styles'

import { CartItems } from '../CartItems'
import { useShoppingCartContext } from '../../contexts/ShoppingCartContext'

export function OrderSummaryCard() {
  const { cartItems } = useShoppingCartContext()

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
              <td>R$ 9,50</td>
              <td>R$ 3,50</td>
              <td>R$ 13,00</td>
            </tr>
          </tbody>
        </table>
        <button>confirmar pedido</button>
      </OrderSummary>
    </OrderSummaryContainer>
  )
}

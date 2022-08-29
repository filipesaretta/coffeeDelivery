import { Minus, Plus, Trash } from 'phosphor-react'
import {
  Items,
  ItemsContainer,
  OrderSummary,
  OrderSummaryContainer,
  Price,
  Quantity,
} from './styles'

export function OrderSummaryCard() {
  return (
    <OrderSummaryContainer>
      <ItemsContainer>
        <img src="/src/assets/img/americano.png" alt="" />

        <Items>
          <p>Café Americano</p>
          <Quantity>
            <div>
              <Minus weight="bold" size={14} />
              <span>{0}</span>
              <Plus weight="bold" size={14} />
            </div>
            <div>
              <Trash size={14} weight="regular" />
              <span>Remover</span>
            </div>
          </Quantity>
        </Items>
        <Price>R$ 9,90</Price>
      </ItemsContainer>
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

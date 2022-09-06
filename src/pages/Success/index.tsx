import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useShoppingCartContext } from '../../contexts/ShoppingCartContext'
import { DeliveryContainer, AddressContainer, Title } from './styles'

import illustration from '../../assets/img/Illustration.svg'

export function Success() {
  const { getAddress } = useShoppingCartContext()
  const { rua, bairro, numero, cidade, uf, payment } = getAddress()

  return (
    <DeliveryContainer>
      <Title>
        <h1>Pedido Confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </Title>
      <AddressContainer>
        <div>
          <span className="location">
            <MapPin size={16} weight="fill" />
          </span>
          <p>
            Entrega em{' '}
            <b>
              {rua}, {numero}
            </b>
          </p>
          <p>
            {bairro} - {cidade}, {uf}
          </p>
        </div>
        <div>
          <span className="timer">
            <Timer size={16} weight="fill" />
          </span>
          <p>
            Previsão de entrega <b>20 min - 30 min</b>
          </p>
        </div>
        <div>
          <span className="money">
            <CurrencyDollar size={16} />
          </span>
          <p>Pagamento na entrega</p>
          <p>
            <b>{payment}</b>
          </p>
        </div>
      </AddressContainer>
      <img src={illustration} alt="" />
    </DeliveryContainer>
  )
}

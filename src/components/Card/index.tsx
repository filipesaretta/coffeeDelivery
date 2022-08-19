import {
  BuySection,
  CardContainer,
  CoffeeDiv,
  CoffeeTitle,
  CounterCoffee,
  Tag,
  AddToCart,
  Cart,
} from './styles'
import coffe1 from '../../assets/img/americano.png'
import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'

export function Card() {
  return (
    <CardContainer>
      <CoffeeDiv>
        <img src={coffe1} alt="" />
        <Tag>Tradicional</Tag>
      </CoffeeDiv>
      <CoffeeTitle>
        <h2>Expresso Tradicional</h2>
        <p>O tradicional café feito com água quente e grãos moídos</p>
      </CoffeeTitle>
      <BuySection>
        <p>
          R$ <span>9,90</span>
        </p>
        <AddToCart>
          <CounterCoffee>
            <Minus weight="bold" size={14} />
            <span>1</span>
            <Plus weight="bold" size={14} />
          </CounterCoffee>

          <Cart>
            <ShoppingCartSimple size={22} weight="fill" />
          </Cart>
        </AddToCart>
      </BuySection>
    </CardContainer>
  )
}

import {
  BuySection,
  CardContainer,
  CoffeeDiv,
  CoffeeTitle,
  CounterCoffee,
  Tag,
  AddToCart,
  Cart,
  TagContainer,
} from './styles'

import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import { useShoppingCartContext } from '../../contexts/ShoppingCartContext'
import { moneyFormatter } from '../../utils/moneyFormatter'
import { Link } from 'react-router-dom'

interface CoffeeItemsProps {
  items: {
    id: number
    name: string
    description: string
    image: string
    price: number
    tags: string[]
  }
}

export function CardItem({
  items: { id, name, description, image, price, tags },
}: CoffeeItemsProps) {
  const {
    getItemQuantity,
    decreaseItemsQuantity,
    increaseItemsQuantity,
    cartSize,
  } = useShoppingCartContext()

  const quantity = getItemQuantity(id)
  return (
    <CardContainer>
      <CoffeeDiv>
        <img src={image} alt="" />
        <TagContainer>
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </TagContainer>
      </CoffeeDiv>
      <CoffeeTitle>
        <h2>{name}</h2>
        <p>{description}</p>
      </CoffeeTitle>
      <BuySection>
        <p>
          <span>{moneyFormatter(price)}</span>
        </p>
        <AddToCart>
          <CounterCoffee>
            <Minus
              weight="bold"
              size={14}
              onClick={() => decreaseItemsQuantity(id)}
            />
            <span>{quantity}</span>
            <Plus
              weight="bold"
              size={14}
              onClick={() => increaseItemsQuantity(id)}
            />
          </CounterCoffee>

          <Link
            to={cartSize() !== 0 ? '/checkout' : '/'}
            onClick={() => (cartSize() !== 0 ? '' : increaseItemsQuantity(id))}
          >
            <Cart>
              <ShoppingCartSimple size={22} weight="fill" />
            </Cart>
          </Link>
        </AddToCart>
      </BuySection>
    </CardContainer>
  )
}

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

interface CoffeeItemsProps {
  id: number
  name: string
  description: string
  image: string
  price: string
  tags: string[]
}

export function CardItem({
  id,
  name,
  description,
  image,
  price,
  tags,
}: CoffeeItemsProps) {
  const { cartSize, decreaseItemsQuantity, increaseItemsQuantity } =
    useShoppingCartContext()

  const quantity = cartSize(id)
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
          R$ <span>{price}</span>
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
          <Cart onClick={() => increaseItemsQuantity(id)}>
            <ShoppingCartSimple size={22} weight="fill" />
          </Cart>
        </AddToCart>
      </BuySection>
    </CardContainer>
  )
}

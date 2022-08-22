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

interface CoffeeItemsProps {
  items: {
    name: string
    description: string
    image: string
    price: string
    tags: string[]
  }
}

export function Card({
  items: { name, description, image, price, tags },
}: CoffeeItemsProps) {
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
            <Minus weight="bold" size={14} />
            <span>{0}</span>
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

import { Minus, Plus, Trash } from 'phosphor-react'
import { Price, CartItemsContainer, Items, Quantity } from './styles'

import storeItems from '../../data/storeItems.json'
import { useShoppingCartContext } from '../../contexts/ShoppingCartContext'
import { moneyFormatter } from '../../utils/moneyFormatter'

interface CartItemsProps {
  id: number
  quantity: number
}

export function CartItems({ id, quantity }: CartItemsProps) {
  const { removeItem, increaseItemsQuantity, decreaseItemsQuantity } =
    useShoppingCartContext()
  const itemsOnCart = storeItems.filter((item) => {
    if (item.id !== undefined && item.id === id) {
      return { ...item, quantity }
    } else {
      return null
    }
  })

  return (
    <>
      {itemsOnCart &&
        itemsOnCart.map((item) => (
          <CartItemsContainer key={item.id}>
            <img src={item.image} alt="" />

            <Items>
              <p>{item.name}</p>
              <Quantity>
                <div>
                  <Minus
                    onClick={() => decreaseItemsQuantity(item.id)}
                    weight="bold"
                    size={14}
                  />
                  <span>{quantity}</span>
                  <Plus
                    onClick={() => increaseItemsQuantity(item.id)}
                    weight="bold"
                    size={14}
                  />
                </div>
                <button onClick={() => removeItem(item.id)}>
                  <Trash size={14} weight="regular" />
                  <span>Remover</span>
                </button>
              </Quantity>
            </Items>
            <Price>{moneyFormatter(Number(item.price) * quantity)}</Price>
          </CartItemsContainer>
        ))}
    </>
  )
}

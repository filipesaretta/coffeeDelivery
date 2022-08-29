import { useContext, createContext, useState, ReactNode } from 'react'

interface ShoppingCartProviderProps {
  children: ReactNode
}

interface CartItemsProps {
  id: number
  quantity: number
}

interface ShoppingCartContextProps {
  cartSize: (id: number) => number
  increaseItemsQuantity: (id: number) => void
  decreaseItemsQuantity: (id: number) => void
  removeItem: (id: number) => void
}

const ShoppingCartContext = createContext({} as ShoppingCartContextProps)

export function useShoppingCartContext() {
  return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cartItem, setCartItem] = useState<CartItemsProps[]>([])

  function cartSize(id: number) {
    return cartItem.find((item) => item.id === id)?.quantity || 0
  }

  function increaseItemsQuantity(id: number) {
    setCartItem((currentItems) => {
      if (currentItems.find((item) => item.id === id) == null) {
        return [...currentItems, { id, quantity: 1 }]
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      }
    })
  }
  function decreaseItemsQuantity(id: number) {
    setCartItem((currentItems) => {
      if (currentItems.find((item) => item.id === id)?.quantity === 1) {
        return currentItems.filter((item) => item.id !== id)
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  function removeItem(id: number) {
    setCartItem((currentItems) => {
      return currentItems.filter((item) => item.id !== id)
    })
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        cartSize,
        increaseItemsQuantity,
        decreaseItemsQuantity,
        removeItem,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}

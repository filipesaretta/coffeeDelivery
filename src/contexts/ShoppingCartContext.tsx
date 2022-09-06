import { useContext, createContext, useState, ReactNode } from 'react'

interface ShoppingCartProviderProps {
  children: ReactNode
}

interface CartItemsProps {
  id: number
  quantity: number
}
interface AddressDetailsProps {
  bairro: string
  cep: string
  cidade: string
  complemento: string
  numero: string
  payment: string
  rua: string
  uf: string
}

interface ShoppingCartContextProps {
  getItemQuantity: (id: number) => number
  increaseItemsQuantity: (id: number) => void
  decreaseItemsQuantity: (id: number) => void
  removeItem: (id: number) => void
  cartSize: () => number
  cartItems: CartItemsProps[]
  handleAddress: (deliveryData: AddressDetailsProps) => void
  getAddress: () => AddressDetailsProps
}

const ShoppingCartContext = createContext({} as ShoppingCartContextProps)

export function useShoppingCartContext() {
  return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItemsProps[]>([])
  const [address, setAddress] = useState<AddressDetailsProps>(
    {} as AddressDetailsProps,
  )

  function handleAddress(deliveryData: AddressDetailsProps) {
    setAddress(deliveryData)
  }

  function getAddress() {
    return address
  }

  function getItemQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0
  }

  function cartSize() {
    return cartItems.reduce((result, item) => {
      return result + item.quantity
    }, 0)
  }

  function increaseItemsQuantity(id: number) {
    setCartItems((currentItems) => {
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
    setCartItems((currentItems) => {
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
    setCartItems((currentItems) => {
      return currentItems.filter((item) => item.id !== id)
    })
  }
  return (
    <ShoppingCartContext.Provider
      value={{
        handleAddress,
        getItemQuantity,
        increaseItemsQuantity,
        decreaseItemsQuantity,
        removeItem,
        cartSize,
        cartItems,
        getAddress,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}

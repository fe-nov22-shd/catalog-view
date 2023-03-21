import React, { createContext, useMemo } from "react";
import { useLocalStorage } from '../../utils/useLocalStorage';
import { Phone }  from '../../types/Phone';

export type CartItem = {
  good: Phone,
  count: number,
}

type ContextType = {
  favoruites: Phone[] | undefined,
  cartItems: CartItem[] | undefined,
  addToFavoruite: (phone: Phone) => void,
  addToCart: (phone: Phone) => void,
  removeFromFavoruite: (phone: Phone) => void;
  removeFromCart: (phone: Phone) => void;
  removeOneCart: (phone: Phone) => void;

}

export const LocaleStorageContext = createContext<ContextType>({} as ContextType)

interface Props {
  children: React.ReactNode;
}

export const LocaleStorageProvider: React.FC<Props> = ({ children }) => {
const [favoruites, setFavoruites] = useLocalStorage<Phone[]>('favoruite', []);
const [cartItems, setCartItems] = useLocalStorage<CartItem[]>('cart', []);

const addToCart = (phone: Phone) => {
  let cartItem = cartItems.find(({ good }) => good.id === phone.id);
  if (!cartItem) {
    cartItem = {
      good: phone,
      count: 1,
    }

    setCartItems(prevState => [...prevState, cartItem]);
    return;
  }

  cartItem.count++;
  setCartItems([...cartItems])
}

const removeOneCart = (phone: Phone) => {
  let cartItem = cartItems.find(({ good }) => good.id === phone.id);
  if (cartItem.count > 1) {
    cartItem.count--;
  }
  setCartItems([...cartItems])
}

const addToFavoruite = (phone: Phone) => {
  setFavoruites(prevState => [...prevState, phone]);
  }

const removeFromFavoruite = (phone: Phone) => {
  const filteredFavoruites = favoruites.filter(fav => fav.id !== phone.id);
  setFavoruites(filteredFavoruites);
}

const removeFromCart = (phone: Phone) => {
  const filteredCart = cartItems.filter(({good}) => good.id !== phone.id);
  setCartItems(filteredCart);
}

const contextValue = useMemo(() => (
  { favoruites, cartItems, addToFavoruite, removeFromFavoruite, removeFromCart, addToCart, removeOneCart }
// eslint-disable-next-line react-hooks/exhaustive-deps
), [cartItems, favoruites]);

return (
  <LocaleStorageContext.Provider value={contextValue}>
    {children}
  </LocaleStorageContext.Provider>
)
}

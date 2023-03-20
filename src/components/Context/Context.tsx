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
  addToFavoruite: (phone: Phone | undefined) => void,
  addToCart: (phone: Phone) => void,
  removeFromFavoruite: (phone: Phone | undefined) => void;
  removeFromCart: (phone: Phone) => void;

}


export const LocaleStorageContext = createContext<ContextType>({} as ContextType)

interface Props {
  children: React.ReactNode;
}

export const LocaleStorageProvider: React.FC<Props> = ({ children }) => {
const [favoruites, setFavoruites] = useLocalStorage<Phone[]>('favoruite', []);
// const [cartItems, setcartItems] = useLocalStorage<Phone[]>('cart', []);
const [cartItems, setCartItems] = useLocalStorage<CartItem[]>('cart', []);

const addToCart = (phone: Phone) => {
  let cartItem = cartItems.find(({ good }) => good.id === phone.id);
  console.log(cartItem)
  if (!cartItem) {
    cartItem = {
      good: phone,
      count: 1,
    }
  console.log(cartItem)

    setCartItems(prevState => {
      prevState.push(cartItem);
      return prevState;
    });
    return;
  }

  cartItem.count++;
}

const addToFavoruite = (phone: Phone) => {
  setFavoruites(prevState => {
    prevState.push(phone);
    return prevState;
  });
  }


const removeFromFavoruite = (phone: Phone) => {
  const filteredFavoruites = favoruites?.filter(fav => fav.id !== phone.id);
  setFavoruites(filteredFavoruites);
}

const removeFromCart = (phone: Phone) => {
  const filteredCart = cartItems.filter(({good}) => good.id !== phone.id);
  setCartItems(filteredCart);
}

const contextValue = useMemo(()=> (
  { favoruites, cartItems, addToFavoruite, removeFromFavoruite, removeFromCart, addToCart }
// eslint-disable-next-line react-hooks/exhaustive-deps
),[favoruites, cartItems])


return (
  <LocaleStorageContext.Provider value={contextValue}>
    {children}
  </LocaleStorageContext.Provider>
)
}

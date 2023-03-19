import React, { createContext, useMemo } from "react";
import { useLocalStorage } from '../../utils/useLocalStorage';
import { Phone }  from '../../types/Phone';

type ContextType = {
  favoruites: Phone[] | undefined,
  cartItem: Phone[] | undefined,
  addToFavoruite: (phone: Phone | undefined) => void,
  addToCart: (phone: Phone | undefined) => void,
  removeFromFavoruite: (phone: Phone | undefined) => void;
  removeFromCart: (phone: Phone | undefined) => void;

}


export const LocaleStorageContext = createContext<ContextType>({} as ContextType)

interface Props {
  children: React.ReactNode;
}

export const LocaleStorageProvider: React.FC<Props> = ({ children }) => {
const [favoruites, setFavoruites] = useLocalStorage<Phone[]>('favoruite', []);
const [cartItem, setCartItem] = useLocalStorage<Phone[]>('cart', []);


const addToFavoruite = (phone: Phone) => {
  setFavoruites(prevState => {
    prevState.push(phone)
    return prevState;
  }
)
}

const addToCart = (phone: Phone) => {
  setCartItem(prevState => {
    prevState.push(phone)
    return prevState;
  }
)
}

const removeFromFavoruite = (phone: Phone) => {
  const filteredFavoruites = favoruites?.filter(fav => fav.id !== phone.id);
  setFavoruites(filteredFavoruites);
}

const removeFromCart = (phone: Phone) => {
  const filteredCart = cartItem?.filter(fav => fav.id !== phone.id);
  setCartItem(filteredCart);
}

const contextValue = useMemo(()=> (
  { favoruites, cartItem, addToFavoruite, removeFromFavoruite, removeFromCart, addToCart }
// eslint-disable-next-line react-hooks/exhaustive-deps
),[favoruites, cartItem])


return (
  <LocaleStorageContext.Provider value={contextValue}>
    {children}
  </LocaleStorageContext.Provider>
)
}

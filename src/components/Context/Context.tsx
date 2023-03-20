/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useMemo } from "react";
import { useLocalStorage } from '../../utils/useLocalStorage';
import { Phone }  from '../../types/Phone';

type ContextType = {
  favorites: Phone[] | undefined,
  cartItems: Phone[] | undefined,
  addToFavorites: (phone: Phone | undefined) => void,
  addToCart: (phone: Phone | undefined) => void,
  removeFromFavorites: (phone: Phone | undefined) => void;
  removeFromCart: (phone: Phone | undefined) => void;
}


export const LocaleStorageContext = createContext<ContextType>({} as ContextType)

interface Props {
  children: React.ReactNode;
}

export const LocaleStorageProvider: React.FC<Props> = ({ children }) => {
const [favorites, setFavorites] = useLocalStorage<Phone[]>('favorites', []);
const [cartItems, setcartItems] = useLocalStorage<Phone[]>('cart', []);


const addToFavorites = (phone: Phone) => {
  setFavorites(prevState => {
    prevState.push(phone)
    return prevState;
  }
)
}

const addToCart = (phone: Phone) => {
  setcartItems(prevState => {
    prevState.push(phone)
    return prevState;
  }
)
}

const removeFromFavorites = (phone: Phone) => {
  const filteredFavoruites = favorites?.filter(fav => fav.id !== phone.id);
  setFavorites(filteredFavoruites);
}

const removeFromCart = (phone: Phone) => {
  const filteredCart = cartItems?.filter(fav => fav.id !== phone.id);
  setcartItems(filteredCart);
}


const contextValue = useMemo(()=> (
  { favorites, cartItems, addToFavorites, removeFromFavorites, removeFromCart, addToCart}
),[favorites, cartItems]);




return (
  <LocaleStorageContext.Provider value={contextValue}>
    {children}
  </LocaleStorageContext.Provider>
  );
};

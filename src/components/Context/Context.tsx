import React, { createContext, useMemo } from "react";
import { useLocalStorage } from '../../utils/useLocalStorage';
import { Phone }  from '../../types/Phone';

type ContextType = {
  favoruites: Phone[] | undefined,
  cartItems: Phone[] | undefined,
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
const [cartItems, setcartItems] = useLocalStorage<Phone[]>('cart', []);


const addToFavoruite = (phone: Phone) => {
  setFavoruites(prevState => {

    return [...prevState];
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

const removeFromFavoruite = (phone: Phone) => {
  const filteredFavoruites = favoruites?.filter(fav => fav.id !== phone.id);
  setFavoruites(filteredFavoruites);
}

const removeFromCart = (phone: Phone) => {
  const filteredCart = cartItems?.filter(fav => fav.id !== phone.id);
  setcartItems(filteredCart);
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

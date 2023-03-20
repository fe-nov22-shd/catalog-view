import React from "react";
import { useContext } from 'react';
import { LocaleStorageContext } from "../../components/Context";
import { Phone } from "../../types/Phone";

import './CartItem.scss'

type Props = {
  good: Phone;
}
export const CartItems:React.FC<Props> = ({ good }) => {

  const { name,
    price,
    image,
  } = good;
  const { addToCart, removeFromCart } = useContext(LocaleStorageContext);
  const handleClick = () => {
    removeFromCart(good);
  }

  return (
    <div className="cart-page__card">
      <div className='cart-page__left-part-wrapper'>
        <div className='cart-page__btn-closer-wrapper'>
          <button
            type="button"
            className="cart-page__btn-closer"
            onClick={ handleClick }
          >
              ×
          </button>
        </div>
        <div className='cart-page__image-wrapper'>
          <img
          src={image}
          alt="apple-iphone-11-pro-max"
          className="cart-page__image"/>
        </div>
        <p className="cart-page__name">
          {name}
        </p>
      </div>
      <div className='cart-page__right-part-wrapper'>
        <div className="cart-page__card-counter">
          <button
            className="cart-page__btn-card-counter"
            onClick={() => addToCart(good)}
          >-</button>
          <p className="cart-page__card-count">1</p>
          <button className="cart-page__btn-card-counter">+</button>
        </div>
        <p className="cart-page__card-price">
          {price}
        </p>
      </div>
    </div>
  );

};

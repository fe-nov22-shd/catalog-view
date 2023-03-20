import React from "react";
import { useContext } from 'react';
import { LocaleStorageContext } from "../Context";
import { Phone } from "../../types/Phone";

import './CartItems.scss'

type Props = {
  good: Phone;
  count: number;
}
export const CartItems:React.FC<Props> = ({ good, count }) => {
  const { name,
    price,
    image,
  } = good;
  const isDisabledToRemove = count <= 1;
  const isDisabledToAdd = count >= 100;
  const { addToCart, removeFromCart, removeOneCart } = useContext(LocaleStorageContext);

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
            onClick={() => removeOneCart(good)}
            disabled={isDisabledToRemove}
          >-</button>
          <p className="cart-page__card-count">{count}</p>
          <button
            className="cart-page__btn-card-counter"
            onClick={() => addToCart(good)}
            disabled={isDisabledToAdd}
          >+</button>
        </div>
        <p className="cart-page__card-price">
          {price}
        </p>
      </div>
    </div>
  );

};

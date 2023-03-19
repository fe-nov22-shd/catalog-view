import React from "react";
import photo from './00.jpg'
import './CartItem.scss'

export const CartItem:React.FC = () => {

  return (
    <div className="cart-page__card">
      <div className='cart-page__left-part-wrapper'>
        <div className='cart-page__btn-closer-wrapper'>
          <button
            type="button"
            className="cart-page__btn-closer">
              ×
          </button>
        </div>
        <div className='cart-page__image-wrapper'>
          <img
          src={photo}
          alt="apple-iphone-11-pro-max"
          className="cart-page__image"/>
        </div>
        <p className="cart-page__name">
          Apple iPhone 14 Pro 128GB Silver (MQ023)
        </p>
      </div>
      <div className='cart-page__right-part-wrapper'>
        <div className="cart-page__card-counter">
          <button className="cart-page__btn-card-counter">-</button>
          <p className="cart-page__card-count">1</p>
          <button className="cart-page__btn-card-counter">+</button>
        </div>
        <p className="cart-page__card-price">
          $1999
        </p>
      </div>
    </div>
  );

};

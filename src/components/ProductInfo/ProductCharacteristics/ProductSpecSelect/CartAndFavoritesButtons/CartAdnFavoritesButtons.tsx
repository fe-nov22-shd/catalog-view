import './CartAdnFavoritesButtons.scss';
import {ReactComponent as HeartRed} from '../../../../../img/heart-red.svg';
import {ReactComponent as Heart} from '../../../../../img/heart.svg';
import React from 'react';

type Props = {
  productId: string,
  isAddedToFavorite: boolean,
  isAddedToCart: boolean,
  handleCartButton: (productId: string) => void;
  handleFavoriteButton: (productId: string) => void;
}

export const CartAdnFavoritesButtons: React.FC<Props> = ({
  productId,
  isAddedToFavorite,
  isAddedToCart,
  handleCartButton,
  handleFavoriteButton,
}) => {

  return (
    <div className="product-info__button-container">
      {isAddedToCart
        ? (
          <button
            type="button"
            onClick={() => {
              handleCartButton(productId);
            }}
            className="
              product-info__button--added
              product-info__button
              "
          >
            Added
          </button>
        )
        : (
          <button
            type="button"
            onClick={() => {
              handleCartButton(productId);
            }}
            className="product-info__button"
          >
            Add to cart
          </button>
        )
      }
      <button
        type="button"
        onClick={() => {
          handleFavoriteButton(productId);
        }}
        className="product-info__button-favorite"
      >
        {isAddedToFavorite
          ? <HeartRed />
          : <Heart />
        }
      </button>
    </div>
  );
};

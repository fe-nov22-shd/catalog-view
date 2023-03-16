import './ProductCard.scss'
import {ReactComponent as HeartRed} from '../../img/heart-red.svg';
import {ReactComponent as Heart} from '../../img/heart.svg';
import { Phone } from '../../types/Phone';
import { useCallback, useState } from 'react';

// const phone = {
//   // eslint-disable-next-line no-octal-escape
//   image: 'https://fedox.com.ua/content/images/29/1080x1080l80bc20/p1400393752-apple-iphone-64gb.html-39499155136569.webp',
//   title: 'Apple iPhone Xs 64GB Silver (iMT9G2FS/A)',
//   price: 899,
//   priceWithdiscount: 799,
//   screen: '5.8” OLED',
//   capacity: '64 GB',
//   ram: '4 GB'
// }
const image = 'https://fedox.com.ua/content/images/29/1080x1080l80bc20/p1400393752-apple-iphone-64gb.html-39499155136569.webp'

type Props = {
  phone: Phone,
}

export const ProductCard: React.FC<Props> = ({ phone }) => {
  const [isAddedToCart, setAddedToCart] = useState(false);
  const [isAddedToFavorite, setAddedToFavorite] = useState(false);
  const {
    // image,
    name,
    fullPrice,
    price,
    screen,
    capacity,
    ram,
  } = phone;

  const handleCartButton = useCallback(() => {
    setAddedToCart(current => !current);
  }, [])

  const handleFavoriteButton = useCallback(() => {
    setAddedToFavorite(current => !current);
  }, [])

  return (
    <div className="product-card container__width">
      <img
        src={image}
        alt={name}
        className="product-card__image"
      />
      <h1 className="product-card__title">
        {name}
      </h1>

      <div className="product-card__price-container">
        <p className="product-card__price">
          ${price}
        </p>
        <p className="product-card__price--crossed">
          ${fullPrice}
        </p>
      </div>
      <hr className="product-card__divider" />

      <div className="product-card__details-container">
        <div className="product-card__details">
          <p
            className="product-card__details__title"
          >
            Screen
          </p>
          <p>{screen}</p>
        </div>

        <div className="product-card__details">
          <p
            className="product-card__details__title"
          >
            Capacity
          </p>
          <p>{capacity}</p>
        </div>

        <div className="product-card__details">
          <p
            className="product-card__details__title"
          >
            RAM
          </p>
          <p>{ram}</p>
        </div>
      </div>

      <div className="product-card__button-container">
        {/* add condition if added to cart */}
        {isAddedToCart
          ? (
            <button
              type="button"
              onClick={handleCartButton}
              className="
              product-card__button--added
              product-card__button
              "
            >
              Added
            </button>
          )
          : (
            <button
              type="button"
              onClick={handleCartButton}
              className="product-card__button"
            >
              Add to cart
            </button>
          )
        }
        <button
          type="button"
          onClick={handleFavoriteButton}
          className="product-card__button-favorite"
        >
          {/* add condition if added to favorite */}
          {isAddedToFavorite
            ? <HeartRed />
            : <Heart />
          }
        </button>
      </div>
    </div>
  );
}

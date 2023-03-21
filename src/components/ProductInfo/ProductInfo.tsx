import './ProductInfo.scss';
import React, {FC, useCallback, useContext, useEffect, useState} from 'react';
import { ProductInfoType } from '../../types/ProductInfoType';
import { Grid } from '@mui/material';
import cn from 'classnames';
import { TelephoneColors } from '../../types/TelephoneColors';
import { Link } from 'react-router-dom';
import { getNewProductId } from '../../utils/getNewProductId';
import { LocaleStorageContext } from '../Context';
import {ReactComponent as HeartRed} from '../../img/heart-red.svg';
import {ReactComponent as Heart} from '../../img/heart.svg';

type Props = {
  productInfo: ProductInfoType,
}

export const ProductInfo: FC<Props> = ({ productInfo }) => {
  const [selectedImage, setSelectedImage] = useState(productInfo.images[0]);
  const {
    favoruites,
    cartItems
  } = useContext(LocaleStorageContext);

  const isAddedToCart = cartItems.filter(product => product.good.itemId === productInfo.id).length;
  const isAddedToFavorite = favoruites.filter(product => product.itemId === productInfo.id).length;

  useEffect(() => {
    setSelectedImage(productInfo.images[0]);
  }, [productInfo]);



  const handleCartButton = useCallback(() => {
    // setAddedToCart(current => !current);
    // addToCart(phone);
  }, []);

  const handleFavoriteButton = useCallback(() => {
    // setAddedToFavorite(current => !current);
    // addToFavoruite(phone)
  }, []);

  return (
    <Grid className="product-info" container>
      <Grid item tablet={12} tabletXL={12} desktop={12} mobile={12}>
        <h1 className="product-info__header">{productInfo.name}</h1>
      </Grid>
      <Grid item tablet={6} tabletXL={6} desktop={6} mobile={12}>
        <div className="product-info__images-container">
          <div className="product-info__images-list">
            {productInfo.images.map(image => (
              <a
                key={image}
                className={cn('product-info__image-link', {
                  'product-info__image-link--active': image === selectedImage,
                })}
                onClick={() => {
                  setSelectedImage(image);
                }}
              >
                <img
                  className="product-info__image-list-item"
                  src={image}
                  alt={productInfo.name}
                />
              </a>
            ))}
          </div>
          <div className="product-info__image-preview">
            <img
              className="product-info__image-preview-item"
              src={selectedImage}
              alt={productInfo.name}
            />
          </div>
        </div>
      </Grid>
      <Grid item tablet={6} tabletXL={6} desktop={6} mobile={12}>
        <div className="product-info__actions">
          <div className="product-info__actions-colors">
            <h2 className="product-info__actions-colors-header">Available colors</h2>
            <div className="product-info__actions-colors-list">
              {productInfo.colorsAvailable.map(color => (
                <Link
                  key={color}
                  to={`/phones/${getNewProductId(productInfo.id, color)}`}
                  className={cn('product-info__actions-colors-link' ,{
                    'product-info__actions-colors-link--active' : color === productInfo.color,
                  })}
                >
                  <div
                    style={{ backgroundColor: TelephoneColors[color]}}
                    className="product-info__actions-colors-item"
                  >
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="product-info__actions-capacity">
            <h2 className="product-info__actions-capacity-header">Select capacity</h2>
            <div className="product-info__actions-capacity-list">
              {productInfo.capacityAvailable.map(capacity => (
                <Link
                  key={capacity}
                  to={`/phones/${getNewProductId(productInfo.id, null, capacity)}`}
                  className={cn('product-info__actions-capacity-link' ,{
                    'product-info__actions-capacity-link--active' : capacity === productInfo.capacity,
                  })}
                >
                  <div className="product-info__actions-capacity-item">
                    {capacity}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="product-card-item">
            <div className="product-card__price-container">
              <p className="product-card__price">
                ${productInfo.priceDiscount}
              </p>
              <p className="product-card__price--crossed">
                ${productInfo.priceRegular}
              </p>
            </div>
            <hr className="product-card__divider" />

            <div className="product-card__button-container">
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
                {isAddedToFavorite
                  ? <HeartRed />
                  : <Heart />
                }
              </button>
            </div>

            <div className="product-card__details-container">
              <div className="product-card__details">
                <p
                  className="product-card__details__title"
                >
                  Screen
                </p>
                <p>{productInfo.screen}</p>
              </div>

              <div className="product-card__details">
                <p
                  className="product-card__details__title"
                >
                  Resolution
                </p>
                <p>{productInfo.resolution}</p>
              </div>

              <div className="product-card__details">
                <p
                  className="product-card__details__title"
                >
                  Processor
                </p>
                <p>{productInfo.processor}</p>
              </div>

              <div className="product-card__details">
                <p
                  className="product-card__details__title"
                >
                  RAM
                </p>
                <p>{productInfo.ram}</p>
              </div>
            </div>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

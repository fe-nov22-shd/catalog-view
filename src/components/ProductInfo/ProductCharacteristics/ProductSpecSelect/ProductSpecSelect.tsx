import './ProductSpecSelect.scss';
import React, {useContext, useEffect, useState} from 'react';
import {ProductInfoType} from '../../../../types/ProductInfoType';
import {LocaleStorageContext} from '../../../Context';
import {ColorSelect} from './ColorSelect';
import {CapacitySelect} from './CapacitySelect';
import {CartAdnFavoritesButtons} from './CartAndFavoritesButtons';
import {getProductByProductId} from '../../../../api/getProductsData';
import {SpecSummary} from './SpecSummary';

type Props = {
  productInfo: ProductInfoType,
}

export const ProductSpecSelect: React.FC<Props> = ({ productInfo }) => {
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [isAddedToFavorite, setIsAddedToFavorites] = useState(false);

  const {
    favoruites,
    cartItems,
    addToFavoruite,
    removeFromCart,
    removeFromFavoruite,
    addToCart,
  } = useContext(LocaleStorageContext);

  const isInCart = Boolean(cartItems.find(product => product.good.itemId === productInfo.id));
  const isInFavorite = Boolean(favoruites.find(product => product.itemId === productInfo.id));

  useEffect(() => {
    setIsAddedToCart(isInCart);
    setIsAddedToFavorites(isInFavorite);
  },[productInfo]);


  const handleCartButton = async (phoneId) => {
    const getProduct = await getProductByProductId(phoneId);

    if(isInCart) {
      removeFromCart(getProduct);
      setIsAddedToCart(false);
    } else {
      addToCart(getProduct);
      setIsAddedToCart(true);
    }
  };

  const handleFavoriteButton = async (phoneId) => {
    const getProduct = await getProductByProductId(phoneId);

    if (isInFavorite) {
      removeFromFavoruite(getProduct);
      setIsAddedToFavorites(false);
    } else {
      addToFavoruite(getProduct);
      setIsAddedToFavorites(true);
    }

  };

  return (
    <div className="product-info__actions">
      <div className="product-info__actions-colors">
        <h2 className="product-info__actions-colors-header">Available colors</h2>
        <ColorSelect
          colors={productInfo.colorsAvailable}
          productId={productInfo.id}
          actualColor={productInfo.color}
        />
      </div>
      <div className="product-info__actions-capacity">
        <h2 className="product-info__actions-capacity-header">Select capacity</h2>
        <CapacitySelect
          capacities={productInfo.capacityAvailable}
          productInfoId={productInfo.id}
          actualCapacity={productInfo.capacity}
        />
      </div>

      <div className="product-info__price-container">
        <p className="product-info__price">
            ${productInfo.priceDiscount}
        </p>
        <p className="product-info__price--crossed">
            ${productInfo.priceRegular}
        </p>
      </div>

      <CartAdnFavoritesButtons
        productId={productInfo.id}
        isAddedToCart={isAddedToCart}
        isAddedToFavorite={isAddedToFavorite}
        handleCartButton={handleCartButton}
        handleFavoriteButton={handleFavoriteButton}
      />

      <SpecSummary productInfo={productInfo} />
    </div>
  );
};

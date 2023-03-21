import './SpecSummary.scss';
import React from 'react';
import {ProductInfoType} from '../../../../../types/ProductInfoType';

type Props = {
  productInfo: ProductInfoType,
}

export const SpecSummary: React.FC<Props> = ({ productInfo }) => {
  return (
    <div className="product-info__details-container">
      <div className="product-info__details">
        <p
          className="product-info__details-title"
        >
          Screen
        </p>
        <p
          className="product-info__details-item"
        >
          {productInfo.screen}
        </p>
      </div>

      <div className="product-info__details">
        <p
          className="product-info__details-title"
        >
          Resolution
        </p>
        <p
          className="product-info__details-item"
        >
          {productInfo.resolution}
        </p>
      </div>

      <div className="product-info__details">
        <p
          className="product-info__details-title"
        >
          Processor
        </p>
        <p
          className="product-info__details-item"
        >
          {productInfo.processor}
        </p>
      </div>

      <div className="product-info__details">
        <p
          className="product-info__details-title"
        >
          RAM
        </p>
        <p
          className="product-info__details-item"
        >
          {productInfo.ram}
        </p>
      </div>
    </div>
  );
};

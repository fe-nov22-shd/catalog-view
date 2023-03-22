import './ProductSpec.scss';
import {ProductInfoType} from '../../../../types/ProductInfoType';
import React from 'react';

type Props = {
  productInfo: ProductInfoType,
}

export const ProductSpec: React.FC<Props> = ({ productInfo }) => {
  const specification = [
    'screen',
    'resolution',
    'processor',
    'ram',
    'camera',
    'zoom',
    'cell',
  ];

  return (
    <div className="product-info__specification specification">
      <h2 className="specification__header">
        Tech specs
      </h2>
      <div className="specification__details-container">
        {specification.map(spec => (
          <div
            key={productInfo[spec]}
            className="specification__details"
          >
            <p
              className="specification__details-title"
            >
              {spec}
            </p>
            <p
              className="specification__details-item"
            >
              {spec === 'cell'
                ? productInfo[spec].join(', ')
                : productInfo[spec]
              }
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

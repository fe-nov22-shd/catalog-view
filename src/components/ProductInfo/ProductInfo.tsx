import './ProductInfo.scss';
import React from 'react';
import { ProductInfoType } from '../../types/ProductInfoType';
import { Grid } from '@mui/material';
import {ProductCharacteristics} from './ProductCharacteristics';
import {ProductDescription} from './ProductDescription/ProductDescription';

type Props = {
  productInfo: ProductInfoType,
}

export const ProductInfo: React.FC<Props> = ({ productInfo }) => {
  return (
    <div className="product-info">
      <h1 className="product-info__header">{productInfo.name}</h1>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={3}
        columns={{tablet: 12, tabletXL: 12, desktop: 24, mobile: 4}}
      >
        <ProductCharacteristics productInfo={productInfo} />
        <ProductDescription productInfo={productInfo} />
      </Grid>
    </div>
  );
};

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
      <Grid columnSpacing={10}  rowSpacing={10} container>
        <ProductCharacteristics productInfo={productInfo} />

        <ProductDescription productInfo={productInfo} />
      </Grid>
    </div>
  );
};

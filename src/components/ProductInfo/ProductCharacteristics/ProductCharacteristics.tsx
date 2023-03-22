import './ProductCharacteristics.scss';
import React from 'react';
import {ProductPictureSelect} from './ProductPictureSelect';
import {ProductInfoType} from '../../../types/ProductInfoType';
import { Grid } from '@mui/material';
import { ProductSpecSelect } from './ProductSpecSelect';

type Props = {
  productInfo: ProductInfoType,
}
export const ProductCharacteristics: React.FC<Props> = ({ productInfo }) => {
  return (
    <>
      <Grid item tablet={6} tabletXL={6} desktop={12} mobile={4}>
        <ProductPictureSelect  images={productInfo.images} />
      </Grid>
      <Grid item tablet={6} tabletXL={6} desktop={12} mobile={4}>
        <ProductSpecSelect productInfo={productInfo} />
      </Grid>
    </>
  );
};

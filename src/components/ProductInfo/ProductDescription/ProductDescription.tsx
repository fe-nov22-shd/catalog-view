import './ProductDescription.scss';
import { Grid } from '@mui/material';
import React from 'react';
import {ProductInfoType} from '../../../types/ProductInfoType';
import {ProductAbout} from './ProductAbout';
import {ProductSpec} from './productSpec';

type Props = {
  productInfo: ProductInfoType,
}

export const ProductDescription: React.FC<Props> = ({ productInfo }) => {
  const { description } = productInfo;

  return (
    <>
      <Grid item tablet={12} tabletXL={12} desktop={12} mobile={4}>
        <ProductAbout description={description}/>
      </Grid>

      <Grid item tablet={12} tabletXL={12} desktop={12} mobile={4}>
        <ProductSpec productInfo={productInfo} />
      </Grid>
    </>
  );
};

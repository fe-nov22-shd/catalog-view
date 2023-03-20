import './ProductInfo.scss';
import {FC, useState} from 'react';
import { ProductInfoType } from '../../types/ProductInfoType';
import { Grid } from '@mui/material';

type Props = {
  productInfo: ProductInfoType,
}

export const ProductInfo: FC<Props> = ({ productInfo }) => {
  const [selectedImage, setSelectedImage] = useState(productInfo.images[0]);

  return (
    <Grid
      className="product-info"
      container
      // rowSpacing={1}
      // columnSpacing={3}
      // columns={{ tablet: 12, tabletXL: 12, desktop: 24, mobile: 4 }}
    >
      <Grid item tablet={12} tabletXL={12} desktop={12} mobile={12}>
        <h1 className="product-info__header">{productInfo.name}</h1>
      </Grid>
      <Grid item tablet={6} tabletXL={6} desktop={6} mobile={12}>
        <div className="product-info__images-container">
          <div className="product-info__images-list">
            {productInfo.images.map(image => (
              <a
                key={image}
                className="product-info__image-link"
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
    </Grid>
  );
};

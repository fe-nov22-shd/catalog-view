import './ProductPictureSelect.scss';
import cn from 'classnames';
import React, {useEffect, useState} from 'react';

type Props = {
  images: string[];
}
export const ProductPictureSelect: React.FC<Props> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  useEffect(() => {
    setSelectedImage(images[0]);
  }, [images]);

  return (
    <div className="product-info__images-container">
      <div className="product-info__images-list">
        {images.map(image => (
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
              alt={image}
            />
          </a>
        ))}
      </div>
      <div className="product-info__image-preview">
        <img
          className="product-info__image-preview-item"
          src={selectedImage}
          alt={selectedImage}
        />
      </div>
    </div>
  );
};

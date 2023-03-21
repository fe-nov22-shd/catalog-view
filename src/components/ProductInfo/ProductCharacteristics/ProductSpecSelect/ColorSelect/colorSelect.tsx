import './colorSelect.scss';
import React from 'react';
import {Link} from 'react-router-dom';
import {getNewProductId} from '../../../../../utils/getNewProductId';
import cn from 'classnames';
import {TelephoneColors} from '../../../../../types/TelephoneColors';

type Props = {
  actualColor: string;
  productId: string;
  colors: string[];
}
export const ColorSelect: React.FC<Props> = ({
  colors ,
  productId,
  actualColor,
}) => {
  return (
    <div className="product-info__actions-colors-list">
      {colors.map(color => (
        <Link
          key={color}
          to={`/phones/${getNewProductId(productId, color)}`}
          className={cn('product-info__actions-colors-link' ,{
            'product-info__actions-colors-link--active' : color === actualColor,
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
  );
};

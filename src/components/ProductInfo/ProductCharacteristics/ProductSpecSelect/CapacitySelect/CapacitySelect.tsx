import './CapacitySelect.scss';
import {Link} from 'react-router-dom';
import {getNewProductId} from '../../../../../utils/getNewProductId';
import cn from 'classnames';
import React from 'react';

type Props = {
  productInfoId: string
  actualCapacity: string;
  capacities: string[];
}
export const CapacitySelect: React.FC<Props> = ({
  productInfoId,
  actualCapacity,
  capacities,
}) => {
  return (
    <div className="product-info__actions-capacity-list">
      {capacities.map(capacity => (
        <Link
          key={capacity}
          to={`/phones/${getNewProductId(productInfoId, null, capacity)}`}
          className={cn('product-info__actions-capacity-link' ,{
            'product-info__actions-capacity-link--active' : capacity === actualCapacity,
          })}
        >
          <div className="product-info__actions-capacity-item">
            {capacity}
          </div>
        </Link>
      ))}
    </div>
  );
};

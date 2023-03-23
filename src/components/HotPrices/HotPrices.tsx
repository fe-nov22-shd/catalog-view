import React, { useState, useEffect } from "react";
import { Phone } from '../../types/Phone';

import { ProductCard } from '../productCard';
import { PhoneSlider } from '../PhoneSlider';
import { getHotPricePhones } from '../../api/getProductsData';

import './HotPrices.scss';

export const HotPrices: React.FC = () => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const isDataLoaded = phones.length > 0 && !isLoading;

  const getPhonesFromServer = async () => {
    setIsLoading(true);
    try {
      const response = await getHotPricePhones();
      const sortedDesc = response
        .map((res) => res.dataValues)
        .sort((a, b) => b.price - a.price);

      setPhones(sortedDesc);
    } catch {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPhonesFromServer();
  }, []);

  return (
    <section className="hot-prices">
      <h3 className="hot-prices__title">Hot prices</h3>

      {isDataLoaded && (
        <PhoneSlider>
          {phones.map((phone) => (
            <ProductCard key={phone.id} phone={phone} />
          ))}
        </PhoneSlider>
      )}

      {hasError && (
        <p className='fetch-error-message'>
          "Oops! We're sorry, but it seems that the data failed to load. Please
          try again later or contact our support team for assistance. Thank you
          for your patience."
        </p>
      )}
    </section>
  );
};

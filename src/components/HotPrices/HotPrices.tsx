import React, { useState, useEffect } from "react";
import { getPhonesData } from '../../api/getPhonesData';
import { Phone } from '../../types/Phone';

import { ProductCard } from '../productCard';
import { PhoneSlider } from '../PhoneSlider';

import './HotPrices.scss';

export const HotPrices: React.FC = () => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const dataIsLoaded = phones.length && !isLoading;

  const getCheapestPhones = async (searchParam) => {
    setIsLoading(true);

    try {
      const { phones } = await getPhonesData(searchParam);
      const sortedDesc = phones.slice(0, 16).sort((a, b) => b.price - a.price);
      setPhones(sortedDesc);
    } catch {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCheapestPhones("?sort=cheapest");
  }, []);

  return (
    <section className="hot-prices">
      <h3 className="hot-prices__title">Hot prices</h3>

      {dataIsLoaded && (
        <PhoneSlider>
          {phones.map((phone) => (
            <ProductCard key={phone.id} phone={phone} />
          ))}
        </PhoneSlider>
      )}

      {hasError && (
        <p>
          "Oops! We're sorry, but it seems that the data failed to load. Please
          try again later or contact our support team for assistance. Thank you
          for your patience."
        </p>
      )}
    </section>
  );
};

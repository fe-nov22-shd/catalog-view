import React, { useState, useEffect } from "react";
import { getPhonesData } from '../../api/getPhonesData';
import { Phone } from '../../types/Phone';

import { ProductCard } from '../productCard';
import { PhoneSlider } from '../PhoneSlider';

import './HotPrices.scss';

export const HotPrices: React.FC = () => {
  const [phones, setPhones] = useState<Phone[]>([]);

  const getCheapestPhones = async (searchParam) => {
    try {
      const { phones } = await getPhonesData(searchParam);
      const sortedDesc = phones.slice(0, 16).sort((a, b) => b.price - a.price);
      setPhones(sortedDesc);
    } catch {
    } finally {
    }
  };

  useEffect(() => {
    getCheapestPhones("?sort=cheapest");
  }, []);

  return (
    <section className="hot-prices">
      <h3 className='hot-prices__title'>Hot prices</h3>

      <PhoneSlider>
        {phones.map((phone) => (
          <ProductCard key={phone.id} phone={phone} />
        ))}
      </PhoneSlider>
    </section>
  );
};

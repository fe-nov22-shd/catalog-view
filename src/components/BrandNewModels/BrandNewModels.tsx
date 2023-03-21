import React, { useState, useEffect } from "react";
import { getPhonesData } from '../../api/getPhonesData';
import { Phone } from '../../types/Phone';

import { ProductCard } from '../productCard';
import { PhoneSlider } from '../PhoneSlider';

import './BrandNewModels.scss';

export const BrandNewModels: React.FC = () => {
  const [phones, setPhones] = useState<Phone[]>([]);

  const getNewestPhones = async (searchParam) => {
    try {
      const { phones } = await getPhonesData(searchParam);
      const sortedDesc = phones.sort((a, b) => b.price - a.price).slice(0, 16);
      setPhones(sortedDesc);
    } catch {
      console.log('brand new error');
    } finally {
    }
  };

  useEffect(() => {
    getNewestPhones("?sort=newest");
  }, []);

  return (
    <section className="brand-new-models">
      <h3 className='brand-new-models__title'>
        Brand new models
      </h3>

      <PhoneSlider>
        {phones.map((phone) => (
          <ProductCard key={phone.id} phone={phone} />
        ))}
      </PhoneSlider>
    </section>
  );
};

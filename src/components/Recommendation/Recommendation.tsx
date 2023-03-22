import React from 'react';
import { PhoneSlider } from "../../components/PhoneSlider";
import { ProductCard } from "../../components/productCard";

import { Phone } from "../../types/Phone";
import './Recommendation.scss';

type Props = {
  recommendation: Phone[];
};

export const Recommendation: React.FC<Props> = ({ recommendation }) => {
  return (
    <section className="recommendation">
      <h3 className="recommendation__title">You may also like</h3>
      <PhoneSlider>
        {recommendation.map((phone) => (
          <ProductCard key={phone.id} phone={phone} />
        ))}
      </PhoneSlider>
    </section>
  );
};

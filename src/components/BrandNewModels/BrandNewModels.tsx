import React, { useState, useEffect } from "react";
import { getPhonesData } from "../../api/getPhonesData";
import { Phone } from "../../types/Phone";

import { ProductCard } from "../productCard";
import { PhoneSlider } from "../PhoneSlider";

import "./BrandNewModels.scss";

export const BrandNewModels: React.FC = () => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const dataIsLoaded = phones.length && !isLoading;

  const getCheapestPhones = async (searchParam) => {
    setIsLoading(true);

    try {
      const { phones } = await getPhonesData(searchParam);
      const sortedDesc = phones.sort((a, b) => b.price - a.price).slice(0, 16);
      setPhones(sortedDesc);
    } catch {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCheapestPhones("?sort=newest");
  }, []);

  return (
    <section className="brand-new-models">
      <h3 className="brand-new-models__title">Brand new models</h3>

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

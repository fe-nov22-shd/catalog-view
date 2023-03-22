import React, { useState, useEffect } from "react";
import { Phone } from "../../types/Phone";

import { ProductCard } from "../productCard";
import { PhoneSlider } from "../PhoneSlider";
import { getNewestPhones } from '../../api/getPhonesData';

import "./BrandNewModels.scss";

export const BrandNewModels: React.FC = () => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const isDataLoaded = phones.length > 0 && !isLoading;

    const getPhonesFromServer = async () => {
      setIsLoading(true);
      try {
        const response = await getNewestPhones();
        const sortedDesc = response.sort((a, b) => b.price - a.price);
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
    <section className="brand-new-models">
      <h3 className="brand-new-models__title">Brand new models</h3>

      {isDataLoaded && (
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

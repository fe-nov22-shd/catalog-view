import './ProductAbout.scss';
import React from 'react';
import {Description} from '../../../../types/Description';

type Props  = {
  description: Description[];
}

export const ProductAbout: React.FC<Props> = ({ description }) => {
  return (
    <div className="product-info__about about">
      <h2 className="about__header">
        About
      </h2>
      {description.map(item => (
        <section className="about__section" key={item.title}>
          <h3 className="about__title">
            {item.title}
          </h3>
          <div className="about__description">
            {item.text.map(paragraph => (
              <p
                key={paragraph}
                className="about__description-text"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

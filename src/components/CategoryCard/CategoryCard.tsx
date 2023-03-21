import React from "react";
import { Link } from "react-router-dom";
import "./CategoryCard.scss";

type Props = {
  link: string;
  image: string;
  title: string;
  amount: number;
};

export const CategoryCard: React.FC<Props> = ({
  link,
  image,
  title,
  amount,
}) => (
  <div className={`category`}>
    <Link to={link} className="category__link">
      <img
        className="category__image"
        src={image}
        alt={`${title} category`}
      />
      <h3 className="category__title">{title}</h3>
      <p className="category__amount">{`${amount} models`}</p>
    </Link>
  </div>
);

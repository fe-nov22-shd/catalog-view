import React from 'react';
import Grid from "@mui/material/Grid";
import './ShopByCategory.scss';
import { CategoryCard } from '../CategoryCard';

import categoryPhonesImg from "../../img/categories/category-phones.jpg";
import categoryTabletsImg from "../../img/categories/category-tablets.jpg";
import categoryAccessoriesImg from "../../img/categories/category-accessories.jpg";

export const ShopByCategory: React.FC = () => {
  const phonesAmount = 95;

  return (
    <section className="categories">
      <h2 className="categories__title">Shop by category</h2>

      <Grid container rowSpacing={1} columnSpacing={3}>
        <Grid item tablet={4} tabletXL={4} desktop={4} mobile={12}>
          <CategoryCard
            link="/phones"
            image={categoryPhonesImg}
            title="Mobile phones"
            amount={+phonesAmount}
          />
      </Grid>

        <Grid item tablet={4} tabletXL={4} desktop={4} mobile={12}>
          <CategoryCard
            link="/tablets"
            image={categoryTabletsImg}
            title="Tablets"
            amount={24}
          />
        </Grid>

        <Grid item tablet={4} tabletXL={4} desktop={4} mobile={12}>
          <CategoryCard
            link="/accessories"
            image={categoryAccessoriesImg}
            title="Accessories"
            amount={100}
          />
        </Grid>
      </Grid>
    </section>
  );
}

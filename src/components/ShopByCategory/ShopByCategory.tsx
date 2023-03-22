import React, { useEffect, useState} from 'react';
import Grid from "@mui/material/Grid";
import './ShopByCategory.scss';
import { CategoryCard } from '../CategoryCard';
import { getPhonesData } from '../../api/getPhonesData';

import categoryPhonesImg from "../../img/categories/category-phones.jpg";
import categoryTabletsImg from "../../img/categories/category-tablets.jpg";
import categoryAccessoriesImg from "../../img/categories/category-accessories.jpg";

export const ShopByCategory: React.FC = () => {
  const [amount, setAmount] = useState(0);

  const getPhonesFromServer = async (searchParam) => {
    try {
      const { amount } = await getPhonesData(searchParam);
      setAmount(amount);
    } catch {
      setAmount(0);
    }
  };

    useEffect(() => {
      getPhonesFromServer('');
    }, []);

  return (
    <section className="categories">
      <h2 className="categories__title">Shop by category</h2>

      <Grid container rowSpacing={1} columnSpacing={3}>
        <Grid item tablet={4} tabletXL={4} desktop={4} mobile={12}>
          <CategoryCard
            link="/phones"
            image={categoryPhonesImg}
            title="Mobile phones"
            amount={+amount}
          />
      </Grid>

        <Grid item tablet={4} tabletXL={4} desktop={4} mobile={12}>
          <CategoryCard
            link="/tablets"
            image={categoryTabletsImg}
            title="Tablets"
            amount={0}
          />
        </Grid>

        <Grid item tablet={4} tabletXL={4} desktop={4} mobile={12}>
          <CategoryCard
            link="/accessories"
            image={categoryAccessoriesImg}
            title="Accessories"
            amount={0}
          />
        </Grid>
      </Grid>
    </section>
  );
}

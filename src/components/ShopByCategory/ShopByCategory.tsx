import React, { useEffect, useState} from 'react';
import Grid from "@mui/material/Grid";
import './ShopByCategory.scss';
import { CategoryCard } from '../CategoryCard';
import { getPhonesData } from '../../api/getProductsData';
import { getTabletsData } from '../../api/getProductsData';

import categoryPhonesImg from "../../img/categories/category-phones.jpg";
import categoryTabletsImg from "../../img/categories/category-tablets.jpg";
import categoryAccessoriesImg from "../../img/categories/category-accessories.jpg";

export const ShopByCategory: React.FC = () => {
  const [phonesAmount, setPhonesAmount] = useState(0);
  const [tabletsAmount, setTabletsAmount] = useState(0);
  const [accessoriesAmount, setAccessoriesAmount] = useState(0);

  const getData = async (searchParam) => {
    try {
      const phones = await getPhonesData(searchParam);
      const tablets = await getTabletsData(searchParam);
      setPhonesAmount(phones.amount);
      setTabletsAmount(tablets.amount);
    } catch {
      setPhonesAmount(0);
      setTabletsAmount(0);
    }
  };

  useEffect(() => {
    getData('');
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
            amount={+phonesAmount}
          />
        </Grid>

        <Grid item tablet={4} tabletXL={4} desktop={4} mobile={12}>
          <CategoryCard
            link="/tablets"
            image={categoryTabletsImg}
            title="Tablets"
            amount={+tabletsAmount}
          />
        </Grid>

        <Grid item tablet={4} tabletXL={4} desktop={4} mobile={12}>
          <CategoryCard
            link="/accessories"
            image={categoryAccessoriesImg}
            title="Accessories"
            amount={+accessoriesAmount}
          />
        </Grid>
      </Grid>
    </section>
  );
}

import Grid from '@mui/material/Grid';
import { Banner } from '../../components/Banner';
import { ShopByCategory } from '../../components/ShopByCategory';
import { BrandNewModels } from '../../components/BrandNewModels';
import { HotPrices } from '../../components/HotPrices';

import './HomePage.scss';

export const HomePage = () => {

  return (
    <Grid container rowSpacing={1} columnSpacing={3}>
      <Grid item tablet={12} tabletXL={12} desktop={12} mobile={12}>
        <h1 className="hero-title">Nice Gadgets store!</h1>
      </Grid>

      <Grid item tablet={12} tabletXL={12} desktop={12} mobile={12}>
        <Banner />
      </Grid>

      <Grid item tablet={12} tabletXL={12} desktop={12} mobile={12}>
        <BrandNewModels />
      </Grid>

      <Grid item tablet={12} tabletXL={12} desktop={12} mobile={12}>
        <ShopByCategory />
      </Grid>

      <Grid item tablet={12} tabletXL={12} desktop={12} mobile={12}>
        <HotPrices />
      </Grid>
    </Grid>
  );

};

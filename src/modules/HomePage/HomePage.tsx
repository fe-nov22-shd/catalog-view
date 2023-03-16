import Grid from '@mui/material/Grid';
import { Banner } from '../../components/Banner';

import './HomePage.scss';

export const HomePage = () => {

  return (
    <Grid container rowSpacing={1} columnSpacing={3}>
      <Grid item tablet={12} tabletXL={12} desktop={12} mobile={12}>
        <h1 className='hero-title'>Welcome to Nice Gadgets store!</h1>
      </Grid>

      <Grid item tablet={12} tabletXL={12} desktop={12} mobile={12}>
        <Banner />
      </Grid>

      <Grid item tablet={6} tabletXL={4} desktop={3} mobile={12}>
        <p className="test">Item</p>
      </Grid>
      <Grid item tablet={6} tabletXL={4} desktop={3} mobile={12}>
        <p className="test">Item</p>
      </Grid>
      <Grid item tablet={6} tabletXL={4} desktop={3} mobile={12}>
        <p className="test">Item</p>
      </Grid>
      <Grid item tablet={6} tabletXL={4} desktop={3} mobile={12}>
        <p className="test">Item</p>
      </Grid>
    </Grid>
  );
};

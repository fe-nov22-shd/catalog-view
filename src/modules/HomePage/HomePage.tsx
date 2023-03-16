import Grid from '@mui/material/Grid';

import './HomePage.scss';

export const HomePage = () => {

  return (
    <Grid container rowSpacing={1} columnSpacing={3}>
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
  )
};

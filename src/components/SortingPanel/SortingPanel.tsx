import './SortingPanel.scss'
import Grid from '@mui/material/Grid';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

export const SortingPanel = () => {
  const options = [
    'one', 'two', 'three'
  ];
  const defaultOption = options[0];

  return (

    <div className="sorting-panel">
        <Grid
          container
          rowSpacing={1}
          columnSpacing={3}
          columns={{ tablet: 12, tabletXL: 12, desktop: 24, mobile: 4 }}>
          <Grid item tablet={6} tabletXL={4} desktop={4} mobile={2}>
            <div className="sorting-panel__item">
              <h2 className="sorting-panel__title"> Sort by</h2>
              <Dropdown
                options={options}
                value={defaultOption}
                placeholder="Select an option" />
            </div>
          </Grid>

          <Grid item tablet={6} tabletXL={3} desktop={3} mobile={2}>
            <div className="sorting-panel__item">
              <h2 className="sorting-panel__title"> Items on page </h2>
              <Dropdown options={options} value={defaultOption} placeholder="Select an option" />
            </div>
          </Grid>
        </Grid>
      </div>
  )
}

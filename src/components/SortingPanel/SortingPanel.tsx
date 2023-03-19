import './SortingPanel.scss'
import Grid from '@mui/material/Grid';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import { useSearchParams } from 'react-router-dom';
import { Sort } from '../../types/Sort';

type Props = {
  getNumberOfItems: (a:string) => void
}

export const SortingPanel:React.FC<Props> = ({ getNumberOfItems }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortingOptions = ['None', Sort.Newest, Sort.Cheapest, Sort.Alphabetically];
  const defaultSorting = sortingOptions[0];
  const itemsCount = [ '4', '8', '16', 'all'];
  const defaultCount = itemsCount[2];

  const handleSorting = ({value}) => {
    value !== 'None'
      ? setSearchParams({sort: value})
      : setSearchParams({sort: null})
  };

  const handleItemsOnCount = ({value}) => {
    getNumberOfItems(value)
  }

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
                options={sortingOptions}
                value={defaultSorting}
                placeholder="Select an option"
                onChange={handleSorting}
              />
            </div>
          </Grid>

          <Grid item tablet={6} tabletXL={3} desktop={3} mobile={2}>
            <div className="sorting-panel__item">
              <h2 className="sorting-panel__title"> Items on page </h2>
              <Dropdown
                options={itemsCount}
                value={defaultCount}
                placeholder="Select an option"
                onChange={handleItemsOnCount}
              />
            </div>
          </Grid>
        </Grid>
      </div>
  )
}

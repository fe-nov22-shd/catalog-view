import './SortingPanel.scss'
import Grid from '@mui/material/Grid'
import {ReactComponent as ArrowDown} from '../../img/arrow-down-icon.svg';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Sort } from '../../types/Sort';
import { SearchingForm } from '../SearchingForm';

type Props = {
  getNumberOfItems: (a:string) => void,
  itemsOnPage:string,
  getSortingType: (a:string) => void,
  sortingType:string,
  getCurrentPage:(a:string) => void,
}

export const SortingPanel:React.FC<Props> = ({
   getNumberOfItems,
   itemsOnPage,
   getSortingType,
   sortingType,
   getCurrentPage,
  }) => {

  const handleItemsOnCount = (event: SelectChangeEvent) => {
    getCurrentPage('1');
    getNumberOfItems(event.target.value);
  };

  const handleSorting = (event: SelectChangeEvent) => {
    getSortingType(event.target.value);
  };

  return (
    <div className="sorting-panel">
      <Grid
        container
        rowSpacing={1}
        columnSpacing={3}
        columns={{ tablet: 12, tabletXL: 12, desktop: 24, mobile: 4 }}>

        <Grid item tablet={6} tabletXL={4} desktop={4} mobile={2}>
            <h2 className="sorting-panel__title"> Sort by</h2>
              <Select
                value={sortingType}
                onChange={handleSorting}
                displayEmpty
                IconComponent={ArrowDown}
                className={"sorting-panel__select"}
              >
                <MenuItem value=''>
                    None
                </MenuItem>
                <MenuItem value={Sort.Newest} >
                    Newest
                </MenuItem>
                <MenuItem value={Sort.Cheapest} >
                  From lower price
                </MenuItem>
                <MenuItem value={Sort.Alphabetically} >
                    Alphabetically
                </MenuItem>
              </Select>
        </Grid>

        <Grid
          className={"sorting-panel"}
          item
          tablet={6}
          tabletXL={3}
          desktop={3}
          mobile={2}
        >
            <h2 className="sorting-panel__title"> Items on page </h2>
            <Select
              value={itemsOnPage}
              onChange={handleItemsOnCount}
              displayEmpty
              IconComponent={ArrowDown}
              className={"sorting-panel__select"}
            >
              <MenuItem value={'4'} >
                  4
              </MenuItem>
              <MenuItem value={'8'} >
                  8
              </MenuItem>
              <MenuItem value={'16'} >
                  16
              </MenuItem>
              <MenuItem value={''} >
                  all
              </MenuItem>
            </Select>
        </Grid>
        <Grid
          item
          tablet={12}
          tabletXL={4}
          desktop={17}
          mobile={4}
        >
          <SearchingForm />
        </Grid>

      </Grid>
    </div>
  )
}



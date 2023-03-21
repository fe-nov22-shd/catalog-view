import './CatalogContent.scss'
import React from "react"
import { Grid } from "@mui/material";
import { ProductCard } from "../productCard";
import { Phone } from "../../types/Phone";

type Props = {
  phones: Phone[]
}

export const CatalogContent:React.FC<Props> = ({ phones }) => {
  return (
    <div className="catalog-content">
      <Grid
        container
        rowSpacing={1}
        columnSpacing={3}
        columns={{ tablet: 12, tabletXL: 12, desktop: 24, mobile: 4 }}
      >
        {phones.map(phone => {
          return (
            <Grid item tablet={6} tabletXL={4} desktop={6} mobile={12} key={phone.id}>
              <ProductCard phone={phone} key={phone.id}/>
            </Grid>
          )
        })}

      </Grid>
    </div>
  );
};




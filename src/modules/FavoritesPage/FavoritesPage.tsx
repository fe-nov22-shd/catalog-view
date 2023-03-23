import { LocaleStorageContext } from "../../components/Context";
import { useContext } from 'react';
import { CatalogContent } from "../../components/CatalogContent";
import { Breadcrumbs } from "../Breadcrumbs";
import './FavoritesPage.scss'
import { Link } from "react-router-dom";


export const FavoritesPage = () => {

  const {favoruites} = useContext(LocaleStorageContext);
  const itemLength = favoruites.length;

  return (
    <>
    <Breadcrumbs />
    <h1 className="favoruite__title">Favorites Page</h1>
    <p className="favoruite__count">{itemLength} items </p>
    {itemLength
      ? <CatalogContent products={favoruites} />
      : <p className="favoruite__title-noitem" >
          Nothing was selected for favorites
         <br/>
          Add something
        </p>
      }
  </>
  );
};

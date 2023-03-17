import { LocaleStorageContext } from "../../components/Context";
import { useContext } from 'react';
import { CatalogContent } from "../../components/CatalogContent";
import { Breadcrumbs } from "../Breadcrumbs";
import './FavoritesPage.scss'


export const FavoritesPage = () => {

  const {favoruites} = useContext(LocaleStorageContext);
  const itemLength = favoruites.length;

  return (
    <>
    <Breadcrumbs />
    <h1 className="favoruite__title">Favoruite Page</h1>
    <p className="favoruite__count">{itemLength} items </p>
    <CatalogContent phones={favoruites} />
  </>
  );
};

import './Catalog.scss'

import React from "react";
import { SortingPanel } from "../SortingPanel";

import { Loader } from "../Loader";
import { CatalogContent } from '../CatalogContent';
import { Phone } from '../../types/Phone';


type Props = {
  isLoading: boolean;
  hasError:boolean;
  phones: Phone[]

}
export const Catalog: React.FC<Props> = ({
  isLoading,
  hasError, // need to add notification
  phones,
}) => {

  const count = phones.length;
  return (
    <div className="Catalog">
      <h1 className="Catalog__title">Mobile phones</h1>
      <h2 className="Catalog__items-count"> {count} models </h2>


      <SortingPanel />

      {isLoading
        ? <Loader />
        : <CatalogContent phones={phones}/>
      }
    </div>
  );
}

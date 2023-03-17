import './Catalog.scss'

import React from "react";
import { SortingPanel } from "../SortingPanel";

import { Loader } from "../Loader";
import { CatalogContent } from '../CatalogContent';
import { Phone } from '../../types/Phone';
import { PaginationBlock } from '../PaginationBlock';


type Props = {
  isLoading: boolean;
  hasError:boolean;
  phones: Phone[]
  phonesAmount: number,
  getNumberOfItems: (a:string) => void;
  numberOfPages: number;
  getCurrentPage: (a:string) => void,
}
export const Catalog: React.FC<Props> = ({
  isLoading,
  hasError, // need to add notification
  phones,
  phonesAmount,
  getNumberOfItems,
  numberOfPages,
  getCurrentPage
}) => {

  return (
    <div className="Catalog">
      <h1 className="Catalog__title">Mobile phones</h1>
      <h2 className="Catalog__items-count"> {phonesAmount} models </h2>


      <SortingPanel getNumberOfItems={getNumberOfItems}/>

      {isLoading
        ? <Loader />
        : (
          <>
            <CatalogContent phones={phones}/>
            <PaginationBlock 
              numberOfPages={numberOfPages}
              getCurrentPage={getCurrentPage}
            />
          </>
        )
      }
    </div>
  );
}

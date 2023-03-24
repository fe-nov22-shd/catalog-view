import './Catalog.scss'

import React from "react";
import { SortingPanel } from "../SortingPanel";

import { Loader } from "../Loader";
import { CatalogContent } from '../CatalogContent';
import { Phone } from '../../types/Phone';
import { PaginationBlock } from '../PaginationBlock';
import { NoItemOnSearch } from '../NoItemOnSearch'
import { Error } from '../ErrorOnServer';

type Props = {
  title:string;
  isLoading: boolean;
  hasError:boolean;
  products: Phone[]
  productsAmount: number,
  itemsOnPage:string;
  getNumberOfItems: (a:string) => void;
  numberOfPages: number;
  getCurrentPage: (a:string) => void,
  currentPage:string;
  getSortingType: (a:string) => void,
  sortingType: string

}
export const Catalog: React.FC<Props> = ({
  isLoading,
  hasError, // need to add notification
  products,
  productsAmount,
  itemsOnPage,
  getNumberOfItems,
  numberOfPages,
  getCurrentPage,
  currentPage,
  getSortingType,
  sortingType,
  title,
}) => {

  const isPaginationShowm = itemsOnPage !== '' && (
    (products.length > +itemsOnPage) ||
    (productsAmount > +itemsOnPage)
  );

  return (
    <div className="Catalog">
      <h1 className="Catalog__title">{title}</h1>
      <h2 className="Catalog__items-count"> {productsAmount} models </h2>

      <SortingPanel
        getNumberOfItems={getNumberOfItems}
        itemsOnPage={itemsOnPage}
        getSortingType={getSortingType}
        sortingType={sortingType}
        getCurrentPage={getCurrentPage}
      />

      {isLoading && <Loader />}

      {(isLoading && hasError) && (
         <Error />
      )}

      {(!isLoading &&  products.length === 0) &&
        <NoItemOnSearch />
      }

      {(!isLoading &&  products.length > 0) && (
        <>
          <CatalogContent products={products} />
          {isPaginationShowm &&
            <PaginationBlock
              currentPage={currentPage}
              numberOfPages={numberOfPages}
              getCurrentPage={getCurrentPage}
            />
          }
        </>
        )}
    </div>
  );
}

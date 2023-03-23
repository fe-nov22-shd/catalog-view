import './Catalog.scss'

import React from "react";
import { SortingPanel } from "../SortingPanel";

import { Loader } from "../Loader";
import { CatalogContent } from '../CatalogContent';
import { Phone } from '../../types/Phone';
import { PaginationBlock } from '../PaginationBlock';

type Props = {
  title:string;
  isLoading: boolean;
  hasError:boolean;
  products: Phone[]
  phonesAmount: number,
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
  phonesAmount,
  itemsOnPage,
  getNumberOfItems,
  numberOfPages,
  getCurrentPage,
  currentPage,
  getSortingType,
  sortingType,
  title,
}) => {
  const isPaginationShown = (itemsOnPage !== '');
  return (
    <div className="Catalog">
      <h1 className="Catalog__title">{title}</h1>
      <h2 className="Catalog__items-count"> {phonesAmount} models </h2>

      <SortingPanel
        getNumberOfItems={getNumberOfItems}
        itemsOnPage={itemsOnPage}
        getSortingType={getSortingType}
        sortingType={sortingType}
        getCurrentPage={getCurrentPage}
      />

      {isLoading
        ? <Loader />
        : ( products.length > 0
            ? (
              <>
                <CatalogContent products={products} />
                {isPaginationShown &&
                  <PaginationBlock
                    currentPage={currentPage}
                    numberOfPages={numberOfPages}
                    getCurrentPage={getCurrentPage}
                  />
                }
              </>)
            : (
            <p className="Catalog__items-count">Items not found</p>
            )
          )
      }
    </div>
  );
}

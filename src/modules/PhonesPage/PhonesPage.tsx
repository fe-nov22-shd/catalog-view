/* eslint-disable react-hooks/exhaustive-deps */
import './PhonesPage.scss'
import { Breadcrumbs } from "../Breadcrumbs/Breadcrumbs";
import { Catalog } from '../../components/Catalog';
import { Phone } from '../../types/Phone';
import { useCallback, useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getPhonesData } from '../../api/getProductsData';
import { NumberOfItems } from '../../types/NumberOfItemsOnPage';
import { getSearchWith } from '../../utils/searchHelper';
import { getNumberOfPages } from '../../utils/getNumberOfPages';
import { Sort } from '../../types/Sort';
import { CategotyTitle } from '../../types/CategoryTitle';

export const PhonesPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const [phones, setPhones] = useState<Phone[]>([]);
  const [phonesAmount, setPhonesAmount] = useState(0);

  const [sortingType, setSortingType] = useState<Sort|''>('');
  const [itemsOnPage, setItemsOnPage] = useState<NumberOfItems>('16')
  const [currentPage, setCurrentPage] = useState('1');

  const [searchParams, setSearchParams] = useSearchParams();


  const getPhonesFromServer = async (searchParam) => {
    setIsLoading(true);
    try {
      const { amount, productsByCategory } = await getPhonesData(searchParam);
      console.log(productsByCategory)
      setPhones(productsByCategory);
      setPhonesAmount(amount);
    } catch {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const getNumberOfItems = (value) => setItemsOnPage(value);
  const getCurrentPage = (value) => setCurrentPage(value);
  const getSortingType = (value) => setSortingType(value);

  const applyPaginationQuery = (
    sortType: Sort| '',
    page:string,
    count:string
  ) => {
      setSearchParams(getSearchWith(
        searchParams,
        { sort: sortType || null,
          page: page,
          perPage: count || null,
        }
    ))};

  const location = useLocation();
  const searchQuery = location.search;
  const numberOfPages = getNumberOfPages(phonesAmount, itemsOnPage);


  useEffect(() => {
    applyPaginationQuery(sortingType, currentPage, itemsOnPage);
    getPhonesFromServer(searchQuery);
  }, [itemsOnPage, sortingType, currentPage, searchQuery]);

  return (
    <>
      <Breadcrumbs />
      <Catalog
      title={CategotyTitle.Phones}
      isLoading={isLoading}
      hasError={hasError}
      products={phones}
      phonesAmount={phonesAmount}
      getNumberOfItems={getNumberOfItems}
      itemsOnPage={itemsOnPage}
      numberOfPages={numberOfPages}
      getCurrentPage={getCurrentPage}
      currentPage={currentPage}
      getSortingType={getSortingType}
      sortingType={sortingType}
      />
    </>
  )
}

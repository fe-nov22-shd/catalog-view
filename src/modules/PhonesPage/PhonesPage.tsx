/* eslint-disable react-hooks/exhaustive-deps */
import './PhonesPage.scss'
import { Breadcrumbs } from "../Breadcrumbs/Breadcrumbs";
import { Catalog } from '../../components/Catalog';
import { Phone } from '../../types/Phone';
import { useCallback, useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getPhonesData } from '../../api/getPhonesData';
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
      const { amount, phones } = await getPhonesData(searchParam);
      setPhones(phones);
      setPhonesAmount(amount);
    } catch {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const applyPaginationQuery = useCallback((
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
    ))}, [searchParams]);

  const location = useLocation();
  const searchQuery = location.search;
  const numberOfPages = getNumberOfPages(phonesAmount, itemsOnPage);

  const getNumberOfItems = (value) => setItemsOnPage(value);
  const getCurrentPage = (value) => setCurrentPage(value);
  const getSortingType = (value) => setSortingType(value);

  useEffect(() => {
    applyPaginationQuery(sortingType, currentPage, itemsOnPage);
    getPhonesFromServer(searchQuery);
  }, [sortingType, searchQuery, itemsOnPage, currentPage]);

  return (
    <>
      <Breadcrumbs />
      <Catalog
      title={CategotyTitle.Phones}
      isLoading={isLoading}
      hasError={hasError}
      phones={phones}
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

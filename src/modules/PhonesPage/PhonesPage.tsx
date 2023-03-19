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

export const PhonesPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [phones, setPhones] = useState<Phone[]>([]);
  const [phonesAmount, setPhonesAmount] = useState(0);
  const [itemsOnPage, setItemsOnPage] = useState<NumberOfItems>('16')
  const [currentPage, setCurrentPage] = useState('1');
  const [searchParams, setSearchParams] = useSearchParams();


  const getPhonesFromServer = async (searchParam) => {
    setIsLoading(true);
    try {
      const { amount, phones} = await getPhonesData(searchParam);
      setPhones(phones);
      setPhonesAmount(amount);
    } catch {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const applyPaginationQuery = useCallback(
    (page:string, count:string) => {
      setSearchParams(getSearchWith(
        searchParams,
        {
          page: page,
          perPage: count,
        }
    ))}, []
  )

  const location = useLocation()
  const searchQuery = location.search;
  const numberOfPages = getNumberOfPages(phonesAmount, itemsOnPage);

  const getNumberOfItems = (value) => setItemsOnPage(value)
  const getCurrentPage = (value) => setCurrentPage(value);

  useEffect(() => {
    applyPaginationQuery(currentPage, itemsOnPage);
    getPhonesFromServer(searchQuery);
  }, [searchQuery, itemsOnPage, currentPage]);
  
  return (
    <>
      <Breadcrumbs />
      <Catalog
      isLoading={isLoading}
      hasError={hasError}
      phones={phones}
      phonesAmount={phonesAmount}
      getNumberOfItems={getNumberOfItems}
      numberOfPages={numberOfPages}
      getCurrentPage={getCurrentPage}
      />
    </>
  )
}

import '../PhonesPage/PhonesPage.scss'
import { Breadcrumbs } from "../Breadcrumbs/Breadcrumbs";
import { Catalog } from '../../components/Catalog';
import { Phone } from '../../types/Phone';
import { useCallback, useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getTabletsData } from '../../api/getProductsData';
import { NumberOfItems } from '../../types/NumberOfItemsOnPage';
import { getSearchWith } from '../../utils/searchHelper';
import { getNumberOfPages } from '../../utils/getNumberOfPages';
import { Sort } from '../../types/Sort';
import { CategotyTitle } from '../../types/CategoryTitle';

export const TabletsPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const [tablets, setTablets] = useState<Phone[]>([]);
  const [tabletsAmount, setPhonesAmount] = useState(0);

  const [sortingType, setSortingType] = useState<Sort|''>('');
  const [itemsOnPage, setItemsOnPage] = useState<NumberOfItems>('16')

  const [currentPage, setCurrentPage] = useState('1');
  const [searchParams, setSearchParams] = useSearchParams();

  const getTabletsFromServer = async (searchParam) => {
    setIsLoading(true);
    try {
      const { amount, productsByCategory } = await getTabletsData(searchParam);
      setTablets(productsByCategory);
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
    ))}, [searchParams, setSearchParams]);

  const location = useLocation();
  const searchQuery = location.search;
  const numberOfPages = getNumberOfPages(tabletsAmount, itemsOnPage);

  const getNumberOfItems = (value) => setItemsOnPage(value);
  const getCurrentPage = (value) => setCurrentPage(value);
  const getSortingType = (value) => setSortingType(value);

  useEffect(() => {
    applyPaginationQuery(sortingType, currentPage, itemsOnPage);
  }, []);

  useEffect(() => {
    applyPaginationQuery(sortingType, currentPage, itemsOnPage);
    getTabletsFromServer(searchQuery);
  }, [itemsOnPage, sortingType, currentPage, searchQuery]);
  return (
    <>
      <Breadcrumbs />
      <Catalog
        title={CategotyTitle.Tablets}
        isLoading={isLoading}
        hasError={hasError}
        products={tablets}
        productsAmount={tabletsAmount}
        getNumberOfItems={getNumberOfItems}
        itemsOnPage={itemsOnPage}
        numberOfPages={numberOfPages}
        getCurrentPage={getCurrentPage}
        currentPage={currentPage}
        getSortingType={getSortingType}
        sortingType={sortingType}
      />
    </>
  );
};

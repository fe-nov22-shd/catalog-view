import './SearchingForm.scss';
import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import debounce from 'lodash.debounce';
import { getSearchWith } from '../../utils/searchHelper';

export const SearchingForm: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState('');

  const debouncedSetSearchParams = useCallback(
    debounce(setSearchParams, 1000),
    [],
  );

  const searchClean = getSearchWith(searchParams, { query: null });
  const debouncedClearSearchParams = useCallback(
    debounce(setSearchParams, 0),
    [],
  );
  useEffect(() => {
    debouncedClearSearchParams(searchClean);
  }, []);

  const onQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setQuery(value);
    const normalizedValue = value.trim();
    const newSearchParams = getSearchWith(searchParams, { query: normalizedValue || null });
    debouncedSetSearchParams(newSearchParams);
  };

  return (
    <div className="input">
      <input
        className="input__area"
        placeholder="Search"
        value={query}
        onChange={onQueryChange}
      />
      {query && (
      <button
        className="input__clear"
        onClick={() => {
          setSearchParams();
          setQuery('')
        }}
      > × </button>
      )}
    </div>
  );
};

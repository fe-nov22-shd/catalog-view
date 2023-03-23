import './SearchingForm.scss';
import React, { ChangeEvent, useCallback, useState } from 'react';
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

  const onQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setQuery(value);
    const normalizedValue = value.trim();
    const newSearchParams = getSearchWith(searchParams, { query: normalizedValue || null });
    debouncedSetSearchParams(newSearchParams);
  };

  return (
    <div>
      <input
        className="input"
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

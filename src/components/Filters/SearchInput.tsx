import React, { useEffect, useState } from 'react';
import useActions from '../../hooks/useActions';
import { CloseIcon, SearchIcon } from '../Icons';

const SearchInput = () => {
  const [searchValue, setSearchValue] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const { changeFilters, fetchKatas } = useActions();

  const reset = () => {
    setSearchValue('');
    changeFilters('search', '');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    changeFilters('search', searchValue.trim());
    fetchKatas();
  };

  useEffect(() => {
    const handler = () => setIsFocus(false);
    document.body.addEventListener('click', handler);
    return () => document.body.removeEventListener('click', handler);
  });

  return (
    <form
      className={isFocus ? 'filters__search filters__search_focus' : 'filters__search'}
      onSubmit={handleSubmit}
      onReset={reset}
      onClick={(e) => {
        e.stopPropagation();
        setIsFocus(!isFocus);
      }}
    >
      <input
        type="text"
        value={searchValue}
        onBlur={() => changeFilters('search', searchValue.trim())}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <div className="filters__btn-wrap">
        {searchValue && (
          <button type="reset">
            <CloseIcon />
          </button>
        )}
        <button type="submit">
          <SearchIcon />
        </button>
      </div>
    </form>
  );
};

export default SearchInput;

import React, { useState } from 'react';
import SearchInput from './SearchInput';
import { filterLists } from '../../utils';
import DropdownMultiple from './DropdownMultiple';
import useTypedSelector from '../../hooks/useTypedSelector';
import useActions from '../../hooks/useActions';
import DropdownSingle from './DropDownSingle';

export type DropProps = {
  list: string[];
  filterType: string;
  status: boolean;
  handler: (dropType: string) => void;
};

const Filters = () => {
  const { isAuthorized } = useTypedSelector((state) => state.authorizedUser);
  const { query } = useTypedSelector((state) => state.filters);
  const { fetchKatas, resetFilters } = useActions();
  const [active, setActive] = useState('none');

  const activeHandler = (dropType: string) => setActive(dropType);
  const reset = () => {
    if (query) {
      resetFilters();
      fetchKatas();
    }
  };

  return (
    <div className="library__filters filters">
      <SearchInput />
      <div className="filters__drop-down">
        Sort By
        <DropdownSingle
          list={filterLists.sort}
          filterType="sort"
          status={active === 'sort'}
          handler={activeHandler}
        />
      </div>
      {isAuthorized && (
        <div className="filters__drop-down">
          Progress
          <DropdownSingle
            list={filterLists.progress}
            filterType="progress"
            status={active === 'progress'}
            handler={activeHandler}
          />
        </div>
      )}
      <div className="filters__drop-down">
        Difficulty
        <DropdownMultiple
          list={filterLists.difficulty}
          filterType="difficulty"
          status={active === 'difficulty'}
          handler={activeHandler}
        />
      </div>
      <div className="filters__drop-down">
        Tags
        <DropdownMultiple
          list={filterLists.tags}
          filterType="tags"
          status={active === 'tags'}
          handler={activeHandler}
        />
      </div>
      <div className="filters__controls">
        <button className="btn" onClick={reset}>
          RESET
        </button>
      </div>
    </div>
  );
};

export default Filters;

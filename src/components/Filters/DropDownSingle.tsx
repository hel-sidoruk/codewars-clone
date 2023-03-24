import React, { useEffect, useState } from 'react';
import useActions from '../../hooks/useActions';
import useTypedSelector from '../../hooks/useTypedSelector';
import { DropIcon } from '../Icons';
import FilterItem from './FilterItem';
import { DropProps } from './Filters';

const DropdownSingle = ({ list, filterType, status, handler }: DropProps) => {
  const [selected, setSelected] = useState(list[0]);
  const { changeFilters, fetchKatas } = useActions();
  const { query } = useTypedSelector((state) => state.filters);

  useEffect(() => {
    if (!query) setSelected(list[0]);
  }, [query]);

  const handleOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    handler(!status ? filterType : 'none');
  };

  const selectHandler = (param: string) => {
    setSelected(param);
    const filterValue = param.toLowerCase();
    changeFilters(filterType, filterValue);
    fetchKatas();
  };

  useEffect(() => {
    const close = () => handler('none');
    document.body.addEventListener('click', close);
    return () => document.body.removeEventListener('click', close);
  });

  return (
    <div className={`drop-down ${status ? 'drop-down_open' : ''}`}>
      <button className={`drop-down__top ${status ? 'active' : ''}`} onClick={handleOpen}>
        {selected}
        <DropIcon />
      </button>
      <div className="drop-down__list">
        {list.map((item) => (
          <FilterItem
            selectHandler={selectHandler}
            isSelected={item === selected}
            key={item}
            content={item}
          />
        ))}
      </div>
    </div>
  );
};

export default DropdownSingle;

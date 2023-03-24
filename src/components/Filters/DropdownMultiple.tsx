import { nanoid } from 'nanoid';
import React, { useEffect, useState } from 'react';
import useActions from '../../hooks/useActions';
import useTypedSelector from '../../hooks/useTypedSelector';
import { CloseIcon, DropIcon } from '../Icons';
import FilterItem from './FilterItem';
import { DropProps } from './Filters';
import Label from './Label';

const DropdownMultiple = ({ list, filterType, status, handler }: DropProps) => {
  const [selected, setSelected] = useState<string[]>([]);
  const { changeFilters, addFeatureTags, fetchKatas } = useActions();
  const { query, features } = useTypedSelector((state) => state.filters);

  const selectTags = filterType === 'tags' ? features : selected;

  useEffect(() => {
    if (!query) setSelected([]);
  }, [query]);

  const handleOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    const elem = e.target as HTMLButtonElement;
    if (!elem.closest('.drop-down__label') && !elem.closest('.drop-down__reset')) {
      handler(!status ? filterType : 'none');
    }
  };

  const selectHandler = (param: string) => {
    const newState = selectTags.includes(param)
      ? selectTags.filter((item) => param !== item)
      : [...selectTags, param];
    if (filterType === 'tags') addFeatureTags(newState);
    else setSelected(newState);
    const filters = newState.map((filter) => filter.toLowerCase()).join('*');
    changeFilters(filterType, filters);
    fetchKatas();
  };

  const reset = () => {
    setSelected([]);
    changeFilters(filterType, '');
    if (filterType === 'tags') addFeatureTags([]);
  };

  useEffect(() => {
    const close = () => handler('none');
    document.body.addEventListener('click', close);
    return () => document.body.removeEventListener('click', close);
  });

  return (
    <div className={status ? `drop-down drop-down_open` : `drop-down`}>
      <button
        className={`drop-down__top ${selectTags.length ? 'active' : ''}`}
        onClick={handleOpen}
      >
        <div>
          {selectTags.length
            ? selectTags.map((tag) => <Label key={nanoid()} text={tag} cb={selectHandler} />)
            : `Select ${filterType === 'difficulty' ? 'ranks' : 'tags'}`}
        </div>
        <div className="drop-down__wrap">
          {selectTags.length ? (
            <div className="drop-down__reset" onClick={reset}>
              <CloseIcon />
            </div>
          ) : null}
          <DropIcon />
        </div>
      </button>
      <div onClick={(e) => e.stopPropagation()} className="drop-down__list">
        {list.map((item) => (
          <FilterItem
            selectHandler={selectHandler}
            isSelected={selectTags.includes(item)}
            key={item}
            content={item}
          />
        ))}
      </div>
    </div>
  );
};

export default DropdownMultiple;

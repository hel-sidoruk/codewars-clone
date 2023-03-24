import React from 'react';
import { CheckMark } from '../Icons';

type FilterItemProps = {
  content: string;
  selectHandler: (param: string) => void;
  isSelected: boolean;
};

const FilterItem = ({ content, isSelected, selectHandler }: FilterItemProps) => {
  return (
    <div
      className={isSelected ? 'drop-down__item drop-down__item_active' : 'drop-down__item'}
      onClick={() => selectHandler(content)}
    >
      <CheckMark />
      {content}
    </div>
  );
};

export default FilterItem;

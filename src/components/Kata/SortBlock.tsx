import React, { useState } from 'react';

interface Props {
  title: string;
  items: string[];
  handler?: (s: string) => void;
}

export const SortBlock = ({ title, items, handler }: Props) => {
  const [checked, setChecked] = useState(items[0]);

  const handleClick = (el: string) => {
    setChecked(el);
    if (handler) handler(el);
  };

  return (
    <div>
      <h4 className="title">{title}</h4>
      {items.map((el) => (
        <span
          key={el}
          className={checked === el ? 'check-box current' : 'check-box'}
          onClick={() => handleClick(el)}
        >
          <span className="item"></span>
          <span className="text">{el}</span>
        </span>
      ))}
    </div>
  );
};

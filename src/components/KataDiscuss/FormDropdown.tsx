import { nanoid } from 'nanoid';
import React, { useEffect, useState } from 'react';
import { CommentLabel } from '../../types/comments';
import { commentFormIcons, commentFormOptions } from '../../utils';
import { DropdownItem } from './DropdownItem';

interface Props {
  option: string;
  setOption: (s: CommentLabel | 'No label') => void;
}

export const FormDropdown = ({ option, setOption }: Props) => {
  const [isActive, setIsActive] = useState(false);

  const toggle = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsActive((state) => !state);
  };

  useEffect(() => {
    const close = () => setIsActive(false);
    document.body.addEventListener('click', close);
    return () => document.body.removeEventListener('click', close);
  }, []);

  return (
    <div className={`comment-form__dropdown ${isActive ? 'active' : ''}`} onClick={toggle}>
      <span>
        {commentFormIcons[option] && <i className={`${commentFormIcons[option]} icon-moon`}></i>}
        <span>{option}</span>
      </span>
      <div className="placeholder">Label this discussion...</div>
      <ul className="comment-form__dropdown-list">
        {commentFormOptions.map((el) => (
          <DropdownItem key={nanoid()} setOption={setOption} option={el} />
        ))}
      </ul>
    </div>
  );
};

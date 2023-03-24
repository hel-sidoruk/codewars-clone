import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import useTypedSelector from '../../hooks/useTypedSelector';

const getActiveClass = ({ isActive }: { isActive: boolean }) =>
  `controls__btn ${isActive ? 'active' : ''}`;

export const KataControls = () => {
  const { id } = useParams();
  const { totalCount } = useTypedSelector((state) => state.comments);

  return (
    <div className="controls">
      <NavLink to={`/kata/${id}/`} className={getActiveClass}>
        Details
      </NavLink>
      <NavLink to={`/kata/${id}/solutions`} className={getActiveClass}>
        <i className="icon-moon-bullseye icon-moon"></i>
        Solutions
      </NavLink>
      <NavLink to={`/kata/${id}/discuss`} className={getActiveClass}>
        <i className="icon-moon-comments icon-moon"></i>
        Discourse ({totalCount})
      </NavLink>
    </div>
  );
};

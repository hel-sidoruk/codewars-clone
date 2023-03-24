import { nanoid } from 'nanoid';
import React from 'react';
import { StarredKata } from '.';
import useTypedSelector from '../../hooks/useTypedSelector';

export const StarredKatasList = () => {
  const { starredKatas } = useTypedSelector((state) => state.account);

  return (
    <div className="header__menu starred-menu">
      <div className="header__menu-body">
        <ul>
          {starredKatas && starredKatas.length ? (
            starredKatas?.map((id) => <StarredKata key={nanoid()} id={id} />)
          ) : (
            <li className="header__menu-item">
              <div>You have not starred any kata</div>
              <div>
                To add some, just click the{' '}
                <i style={{ color: 'inherit' }} className="icon-moon icon-moon-star-empty"></i>
                next to any kata title
              </div>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

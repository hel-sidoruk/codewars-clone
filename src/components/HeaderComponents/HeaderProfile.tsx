import React from 'react';
import { UserLink, UserMenu } from '.';
import useTypedSelector from '../../hooks/useTypedSelector';

export const HeaderProfile = () => {
  const { avatar, username } = useTypedSelector((state) => state.account);

  return (
    <li className="header__profile">
      {username && (
        <>
          <UserLink avatar={avatar} username={username} />
          <div className="header__menu profile-menu">
            <UserMenu username={username} />
          </div>
        </>
      )}
    </li>
  );
};

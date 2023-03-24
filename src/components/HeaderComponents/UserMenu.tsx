import React from 'react';
import { Link } from 'react-router-dom';
import useActions from '../../hooks/useActions';

export const UserMenu = ({ username }: { username: string }) => {
  const { signOut, signOutAccount } = useActions();

  const handleSignOut = () => {
    signOut();
    signOutAccount();
  };

  return (
    <div className="header__menu-body">
      <ul>
        <li className="border-bottom">
          <Link className="header__menu-item" to={`/users/${username}/`}>
            <i className="icon-moon icon-moon-user "></i>View Profile
          </Link>
        </li>
        <li className="border-bottom">
          <Link className="header__menu-item" to="/users/edit">
            <i className="icon-moon icon-moon-settings "></i>Account Settings
          </Link>
        </li>
        <li>
          <Link onClick={handleSignOut} to="/login" className="header__menu-item">
            <i className="icon-moon icon-moon-power "></i>Sign out
          </Link>
        </li>
      </ul>
    </div>
  );
};

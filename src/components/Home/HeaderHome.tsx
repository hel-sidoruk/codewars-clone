import React from 'react';
import { Link } from 'react-router-dom';
import useActions from '../../hooks/useActions';
import useTypedSelector from '../../hooks/useTypedSelector';
import { DojoDropdown } from './DojoDropdown';

export const HeaderHome = () => {
  const { isAuthorized } = useTypedSelector((state) => state.authorizedUser);
  const { signOut, signOutAccount } = useActions();

  const handleClick = () => {
    signOut();
    signOutAccount();
  };

  return (
    <div className="header-home">
      <div className="header-home__logo">
        <img src="/codewars.svg" alt="Codewars logo" />
      </div>
      <nav className="header-home__nav">
        <DojoDropdown hidden={isAuthorized ? '' : 'hidden'} />
        {isAuthorized ? (
          <div>
            <Link to="/kata" className="header-home__btn red">
              Enter the Dojo
            </Link>
            <button className="header-home__btn" onClick={handleClick}>
              Sign out
            </button>
          </div>
        ) : (
          <div>
            <Link to="/login" className="header-home__btn">
              Log in
            </Link>
            <Link to="/registration" className="header-home__btn red">
              Join
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};

import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import useTypedSelector from '../../hooks/useTypedSelector';

const getActiveClass = ({ isActive }: { isActive: boolean }) =>
  `user-stats__tab ${isActive ? 'active' : ''}`;

const UserStats = () => {
  const { username } = useTypedSelector((state) => state.authorizedUser);
  const { currentUser } = useTypedSelector((state) => state.user);
  const isAuth = currentUser && currentUser.username === username;

  const path = `/users/${currentUser?.username}`;

  return (
    <div className="user-profile__stats user-stats">
      <div className="user-stats__tabs">
        <NavLink to={`${path}/`} className={getActiveClass}>
          Stats
        </NavLink>
        <NavLink to={`${path}/completed`} className={getActiveClass}>
          Kata
        </NavLink>
        {isAuth && (
          <NavLink to={`${path}/solutions`} className={getActiveClass}>
            Solutions
          </NavLink>
        )}
        <NavLink to={`${path}/collections`} className={getActiveClass}>
          Collections
        </NavLink>
        <NavLink to={`${path}/comments`} className={getActiveClass}>
          Discourse
        </NavLink>
        <NavLink to={`${path}/following`} className={getActiveClass}>
          Social
        </NavLink>
      </div>
      <div className="user-stats__stats">
        <Outlet />
      </div>
    </div>
  );
};
export default UserStats;

import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UsersAPI } from '../../../../api';
import useActions from '../../../../hooks/useActions';
import useTypedSelector from '../../../../hooks/useTypedSelector';
import { initialUser } from '../../../../pages';
import { UserInterface } from '../../../../types/user';
import FollowItem from './FollowItem';

export const SocialTab = (/* { list }: { list: UserInterface[] } */) => {
  //! тестовые данные ----начало
  const { users } = useTypedSelector((state) => state.leaders);
  const { fetchLeaders } = useActions();
  useEffect(() => {
    fetchLeaders();
  }, []);
  //! тестовые данные ----конец

  const [opened, setOpened] = useState('completed');
  const [user, setUser] = useState(initialUser);
  const { id } = useParams();

  useEffect(() => {
    UsersAPI.getOne(id as string).then((data) => setUser(data));
  }, []);

  return (
    <div className="dashboard-wrapper social">
      <div className="dashboard-wrapper__sidebar">
        <Link
          to={`/users/${user.username}/social`}
          className={opened === 'completed' ? '_opened' : ''}
          onClick={() => setOpened('completed')}
        >
          Following
        </Link>
        <Link
          to={`/users/${user.username}/social`}
          className={opened === 'authored' ? '_opened' : ''}
          onClick={() => setOpened('authored')}
        >
          Followers
        </Link>
      </div>
      <div className="dashboard-wrapper__content">
        <div className="follow-list">
          {users.slice(0, 9).map((item) => (
            <FollowItem key={item.id} user={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
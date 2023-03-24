import React from 'react';
import { Link } from 'react-router-dom';
import useTypedSelector from '../../hooks/useTypedSelector';
import { DEFAULT_AVATAR } from '../../utils';
import { Rank } from '../Kata/Rank';
import { Avatar } from '../UI/Avatar';

export const UserLink = ({ avatar, username }: { avatar: string | null; username: string }) => {
  const { rank, honor } = useTypedSelector((state) => state.account);
  return (
    <Link className="header__profile-link" to={`/users/${username}/`}>
      <Avatar src={avatar || DEFAULT_AVATAR} size="38px" />
      <div className="profile-points">
        {rank && <Rank rank={rank} />}
        {honor}
      </div>
    </Link>
  );
};

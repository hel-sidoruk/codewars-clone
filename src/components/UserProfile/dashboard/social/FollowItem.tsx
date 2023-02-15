import React from 'react';
import { Link } from 'react-router-dom';
import { FollowerInterface } from '../../../../types/followers';
import { FakeAvatar } from '../../../Icons';
import { Rank } from '../../../Kata/Rank';

const FollowItem = ({ user, isFollower }: { user: FollowerInterface; isFollower?: boolean }) => {
  const username = isFollower ? user.username : user.followUser;
  return (
    <div className="follow-list__item follow-user">
      <Rank rank={user.rank} />
      <FakeAvatar />
      <Link to={`/users/${username}/`} className="follow-user__name link">
        {username}
      </Link>
      <div className="follow-user__clan">
        {user.clan && <i title="Clan" className="icon-moon-clan icon-moon"></i>}
        {user.clan}
      </div>
      <div className="follow-user__honor">{user.honor}</div>
    </div>
  );
};

export default FollowItem;

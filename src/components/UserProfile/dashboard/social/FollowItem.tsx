import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UsersAPI } from '../../../../api';
import { FollowerInterface } from '../../../../types/followers';
import { UserInterface } from '../../../../types/user';
import { Rank } from '../../../Kata/Rank';
import { Avatar } from '../../../UI/Avatar';

const FollowItem = ({ user, isFollower }: { user: FollowerInterface; isFollower?: boolean }) => {
  const username = isFollower ? user.username : user.followUser;
  const avatar = isFollower ? user.followerAvatar : user.followingAvatar;
  const [follower, setFollower] = useState<UserInterface | null>(null);

  useEffect(() => {
    if (isFollower) UsersAPI.getOne(user.username).then((res) => setFollower(res));
  }, [isFollower, user.username]);

  return (
    <div className="follow-list__item follow-user">
      <Rank rank={user.rank} />
      <Avatar src={avatar} />
      <Link to={`/users/${username}/`} className="follow-user__name link">
        {username}
      </Link>
      <div className="follow-user__clan">
        {!isFollower ? (
          <>
            {user.clan && <i title="Clan" className="icon-moon-clan icon-moon"></i>}
            {user.clan}
          </>
        ) : follower ? (
          <>
            {follower.clan && <i title="Clan" className="icon-moon-clan icon-moon"></i>}
            {follower.clan}
          </>
        ) : (
          ''
        )}
      </div>
      <div className="follow-user__honor">
        {!isFollower ? user.honor : follower ? follower.honor : ''}
      </div>
    </div>
  );
};

export default FollowItem;

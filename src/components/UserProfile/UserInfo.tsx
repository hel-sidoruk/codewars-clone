import React from 'react';
import useTypedSelector from '../../hooks/useTypedSelector';
import { Shield } from '../Icons';
import { Rank } from '../Kata/Rank';
import { Avatar } from '../UI/Avatar';
import { FollowButton } from './FollowButton';

const UserInfo = () => {
  const { username } = useTypedSelector((state) => state.authorizedUser);
  const { currentUser, followers, following, loading } = useTypedSelector((state) => state.user);
  const isAuth = currentUser && currentUser.username === username;

  return (
    <div className="user-profile__info user-info section">
      <Avatar src={loading ? '' : (currentUser?.avatar as string)} size="75px" />
      <div className="user-info__badge">
        <div className="user-info__badge-box">
          {!loading && currentUser && <Rank rank={currentUser.rank}></Rank>}
          {!loading && currentUser && currentUser.username}
        </div>
        <div className="user-info__honor">{currentUser?.honor || ''}</div>
      </div>
      <div className="user-info__shield">
        <Shield />
        <div>mod</div>
      </div>
      <div className="user-info__col user-info__col_1">
        <div>
          <b>Name:</b>
          {currentUser && !loading ? currentUser.name : ''}
        </div>
        <div>
          <b>Clan:</b>
          {currentUser && !loading ? currentUser.clan : ''}
        </div>
      </div>
      <div className="user-info__col user-info__col_2">
        <div>
          <b>Member Since:</b>
          Oct 2023
        </div>
        <div>
          <b>Last Seen:</b>
          Feb 2023
        </div>
      </div>
      <div className="user-info__col user-info__col_3">
        <div>
          <b>Following:</b>
          {following.length}
        </div>
        <div>
          <b>Followers:</b>
          {followers.length}
        </div>
      </div>
      <div className="user-info__controls">{!isAuth && <FollowButton />}</div>
    </div>
  );
};
export default UserInfo;

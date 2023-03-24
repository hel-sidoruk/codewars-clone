import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useTypedSelector from '../../../../hooks/useTypedSelector';
import FollowItem from './FollowItem';

export const SocialTab = ({ list }: { list: 'following' | 'followers' }) => {
  const [opened, setOpened] = useState('completed');
  const { currentUser, following, followers } = useTypedSelector((state) => state.user);

  return (
    <div className="dashboard-wrapper social">
      <div className="dashboard-wrapper__sidebar">
        <Link
          to={`/users/${currentUser?.username}/following`}
          className={opened === 'completed' ? '_opened' : ''}
          onClick={() => setOpened('completed')}
        >
          Following ({following.length})
        </Link>
        <Link
          to={`/users/${currentUser?.username}/followers`}
          className={opened === 'authored' ? '_opened' : ''}
          onClick={() => setOpened('authored')}
        >
          Followers ({followers.length})
        </Link>
      </div>
      <div className="dashboard-wrapper__content">
        {list === 'following' && (
          <div className="follow-list">
            {following.length ? (
              following.map((item) => <FollowItem key={item.id} user={item} />)
            ) : (
              <span className="follow-list__no-content">
                You have not started to follow any users yet.
              </span>
            )}
          </div>
        )}
        {list === 'followers' && (
          <div className="follow-list">
            {followers.length ? (
              followers.map((item) => <FollowItem isFollower key={item.id} user={item} />)
            ) : (
              <span className="follow-list__no-content">You do not have any followers yet.</span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

import React, { useEffect, useState } from 'react';
import { FollowersAPI } from '../../api/FollowersAPI';
import useTypedSelector from '../../hooks/useTypedSelector';

export const FollowButton = () => {
  const [followedUser, setFollowedUser] = useState<string | false>(false);
  const { currentUser } = useTypedSelector((state) => state.user);
  const { avatar } = useTypedSelector((state) => state.account);

  const handleClick = async () => {
    if (!followedUser && currentUser) {
      const { username, honor, rank, clan } = currentUser;
      const followUser = {
        followUser: username,
        honor,
        clan,
        rank,
        followerAvatar: avatar as string,
        followingAvatar: currentUser.avatar,
      };
      const follower = await FollowersAPI.create(followUser);
      if (follower) setFollowedUser(follower.id);
    } else {
      if (followedUser) {
        const { status } = await FollowersAPI.delete(followedUser);
        if (status) setFollowedUser(false);
      }
    }
  };

  useEffect(() => {
    if (currentUser)
      FollowersAPI.checkIsFollowed(currentUser.username).then(({ isFollowed }) =>
        setFollowedUser(isFollowed || false)
      );
  }, [currentUser]);

  return (
    <button
      className={`user-info__follow btn ${followedUser ? 'unfollow' : 'follow'}`}
      onClick={handleClick}
    >
      <i className="icon-moon-follow icon-moon"></i>
      {followedUser ? 'Unfollow' : 'Follow'}
    </button>
  );
};

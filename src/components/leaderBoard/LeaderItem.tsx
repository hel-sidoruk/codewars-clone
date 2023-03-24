import React from 'react';
import { Link } from 'react-router-dom';
import { UserInterface } from '../../types/user';
import { Rank } from '../Kata/Rank';
import { Avatar } from '../UI/Avatar';

const LeaderItem = ({ user, index }: { user: UserInterface; index: number }) => {
  return (
    <div className="leader-table__tr" key={user.id}>
      <div className="leader-table__td leader-table__td_position">#{index + 1}</div>
      <div className="leader-table__td">
        <Rank rank={user.rank}></Rank>
        <Link className="leader-table__link" to={`/users/${user.username}/`}>
          <Avatar src={user.avatar} />
          <div className="leader-table__username">{user.username}</div>
        </Link>
      </div>
      <div className="leader-table__td leader-table__td_clan">{user.clan}</div>
      <div className="leader-table__td">{user.honor}</div>
    </div>
  );
};
export default LeaderItem;

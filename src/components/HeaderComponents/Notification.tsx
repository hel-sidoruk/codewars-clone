import React from 'react';
import { Link } from 'react-router-dom';
import { NotificationInterface } from '../../types/notifications';
import { Rank } from '../Kata/Rank';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import useActions from '../../hooks/useActions';

dayjs.extend(relativeTime);

interface Props {
  user: string;
  avatar: string;
  item: NotificationInterface;
}
export const Notification = ({ user, avatar, item }: Props) => {
  const rank = item.text.match(/\d kyu/);
  const { deleteNotification } = useActions();

  return (
    <li className="notification header__menu-item">
      <div className="notification__top">
        {rank ? (
          <Rank rank={rank[0]} />
        ) : (
          <img src={avatar} alt="avatar" className="notification__avatar" />
        )}
        <Link className="link" to={`/users/${user}`}>
          {item.text}
        </Link>
      </div>
      <div className="notification__bottom">
        <div>{dayjs(item.createdAt).fromNow()}</div>
        <button className="btn btn-dark" onClick={() => deleteNotification(item.id)}>
          Delete
        </button>
      </div>
    </li>
  );
};

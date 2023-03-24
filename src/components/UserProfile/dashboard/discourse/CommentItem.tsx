import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { KataAPI } from '../../../../api';
import { CommentInterface } from '../../../../types/comments';
import { Avatar } from '../../../UI/Avatar';

export const CommentItem = ({ comment }: { comment: CommentInterface }) => {
  const [kataName, setKataName] = useState('');
  useEffect(() => {
    KataAPI.getOne(comment.kataId).then(({ name }) => setKataName(name));
  }, [comment.kataId]);

  return (
    <div className="comment">
      <Avatar src={comment.avatar} size="40px" />
      <div className="comment__content">
        <div className="comment__header">
          <span>{comment.username}</span>
          <div className="bullet"></div>
          <span>
            commented on{' '}
            <Link className="link" to={`/kata/${comment.kataId}`}>
              &quot;{kataName}&quot; kata
            </Link>
          </span>
          <div className="bullet"></div>
          <div>{dayjs(comment.createdAt).fromNow()}</div>
        </div>
        <div className="comment__body">
          <p>{comment.text}</p>
        </div>
      </div>
    </div>
  );
};

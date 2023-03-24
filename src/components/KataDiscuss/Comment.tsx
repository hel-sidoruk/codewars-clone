import dayjs from 'dayjs';
import React from 'react';
import { Link } from 'react-router-dom';
import useTypedSelector from '../../hooks/useTypedSelector';
import { CommentInterface } from '../../types/comments';
import { Avatar } from '../UI/Avatar';
import { CommentVoter } from './CommentVoter';
import { EditCommentButton } from './EditCommentButton';
import { RemoveCommentButton } from './RemoveCommentButton';
import { SpoilerFlag } from './SpoilerFlag';

export const Comment = ({ kataId, comment }: { kataId: string; comment: CommentInterface }) => {
  const { username } = useTypedSelector((state) => state.account);
  const { updatingComment } = useTypedSelector((state) => state.comments);

  const isAccountComment = comment.username === username;

  return (
    <div className={`comment ${comment.id === updatingComment?.id ? 'hidden' : ''}`}>
      <Link className="avatar" to={`/users/${comment.username}`}>
        <Avatar src={comment.avatar} size="40px" />
      </Link>
      <div className="comment__content">
        <div className="comment__header">
          <Link className="link" to={`/users/${comment.username}`}>
            {comment.username}
          </Link>
          <span className="comment__rank">({comment.rank})</span>
          <div className="bullet"></div>
          <div>{dayjs(comment.createdAt).fromNow()}</div>
          {comment.label && (
            <div className={`keyword-tag ${comment.label.toLowerCase()}`}>{comment.label}</div>
          )}
        </div>
        <div className="comment__body">
          <p>{comment.text}</p>
        </div>

        <div className="comment__actions">
          <CommentVoter
            id={comment.id}
            kataId={kataId}
            votes={comment.votes}
            isAccount={isAccountComment}
          />
          <div className="bullet"></div>
          {isAccountComment && <EditCommentButton id={comment.id} />}
          <SpoilerFlag spoiler={comment.spoiler} id={comment.id} kataId={kataId} />
          {isAccountComment && <RemoveCommentButton kataId={kataId} id={comment.id} />}
        </div>
      </div>
    </div>
  );
};

import React, { useEffect, useState } from 'react';
import { CommentsAPI } from '../../../../api';
import useTypedSelector from '../../../../hooks/useTypedSelector';
import { CommentInterface } from '../../../../types/comments';
import Loader from '../../../UI/Loader';
import { CommentItem } from './CommentItem';

export const DiscourseTab = () => {
  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState<CommentInterface[]>([]);
  const [count, setCount] = useState(0);
  const { currentUser } = useTypedSelector((state) => state.user);

  useEffect(() => {
    if (currentUser) {
      setLoading(true);
      CommentsAPI.getUserComments(currentUser.username)
        .then(({ rows, count }) => {
          setComments(rows);
          setCount(count);
        })
        .finally(() => setLoading(false));
    }
  }, [currentUser]);
  return (
    <div className="dashboard-wrapper collections">
      <div className="dashboard-wrapper__sidebar">Conversations {loading ? '' : `(${count})`}</div>
      <div className="dashboard-wrapper__content" style={{ fontSize: 16 }}>
        {loading ? (
          <Loader />
        ) : (
          <div>
            {comments.length
              ? comments.map((item) => <CommentItem key={item.id} comment={item} />)
              : 'There are no items to show'}
          </div>
        )}
      </div>
    </div>
  );
};

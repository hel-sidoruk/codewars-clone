import React, { useEffect, useState } from 'react';
import useActions from '../../hooks/useActions';
import useTypedSelector from '../../hooks/useTypedSelector';
import { CommentLabel } from '../../types/comments';
import { Avatar } from '../UI/Avatar';
import { FormDropdown } from './FormDropdown';

export const CommentForm = ({ kataId }: { kataId: string }) => {
  const [comment, setComment] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [option, setOption] = useState<CommentLabel | 'No label'>('No label');
  const { avatar } = useTypedSelector((state) => state.account);
  const { updatingComment } = useTypedSelector((state) => state.comments);
  const { addComment, setUpdatingComment, updateCommentText } = useActions();

  const reset = () => {
    setComment('');
    setIsActive(false);
    setOption('No label');
  };

  const closeDiscuss = () => {
    reset();
    if (updatingComment) setUpdatingComment(null);
  };

  const postComment = () => {
    const label = option === 'No label' ? null : option;
    addComment(kataId, comment, label);
    reset();
  };

  const updateComment = () => {
    if (!updatingComment) return;
    const label = option === 'No label' ? null : option;
    updateCommentText(kataId, updatingComment.id, label, comment);
    setUpdatingComment(null);
    reset();
  };

  useEffect(() => {
    if (updatingComment) {
      setIsActive(true);
      setComment(updatingComment.text);
      setOption(updatingComment.label === null ? 'No label' : updatingComment.label);
    }
  }, [updatingComment]);

  return (
    <div className="comment-form">
      <Avatar src={avatar as string} size="40px" />
      <div className={`input-field ${isActive ? 'active' : ''}`}>
        <textarea
          className="comment-form__input"
          placeholder="Leave feedback..."
          onChange={(e) => setComment(e.target.value)}
          onClick={() => !isActive && setIsActive(true)}
          value={comment}
          spellCheck={false}
        />
        <div className="comment-form__actions">
          <FormDropdown option={option} setOption={setOption} />
          {updatingComment ? (
            <button className="btn btn-fill" onClick={updateComment}>
              Update
            </button>
          ) : (
            <button className="btn btn-fill" onClick={postComment}>
              Post
            </button>
          )}
          <button className="btn" onClick={closeDiscuss}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

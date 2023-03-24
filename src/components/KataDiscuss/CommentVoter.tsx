import React, { useState } from 'react';
import { CommentsAPI } from '../../api';

interface Props {
  votes: number;
  isAccount: boolean;
  id: number;
  kataId: string;
}

export const CommentVoter = ({ votes, isAccount, id, kataId }: Props) => {
  const [votesNumber, setVotesNumber] = useState(votes);

  const upvote = async () => {
    setVotesNumber(votes + 1);
    await CommentsAPI.update(kataId, id, { votes: votes + 1 });
  };
  const downvote = async () => {
    setVotesNumber(votes - 1);
    await CommentsAPI.update(kataId, id, { votes: votes - 1 });
  };

  return (
    <div className={`voter ${isAccount ? 'disabled' : ''}`}>
      <span className="voter__score">{votesNumber}</span>
      <span className="vote voter__up link" onClick={upvote}>
        <i className="icon-moon-up icon-moon"></i>
      </span>
      <span className="spacer">|</span>
      <span className="vote voter__down link" onClick={downvote}>
        <i className="icon-moon-down icon-moon"></i>
      </span>
    </div>
  );
};

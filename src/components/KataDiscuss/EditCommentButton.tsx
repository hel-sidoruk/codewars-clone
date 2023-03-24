import React from 'react';
import useActions from '../../hooks/useActions';

export const EditCommentButton = ({ id }: { id: number }) => {
  const { setUpdatingComment } = useActions();

  return (
    <>
      <div className="link" onClick={() => setUpdatingComment(id)}>
        <i className="icon-moon-edit icon-moon"></i>Edit
      </div>
      <div className="bullet"></div>
    </>
  );
};

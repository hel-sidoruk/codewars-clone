import React, { useState } from 'react';
import useActions from '../../hooks/useActions';
import { Dialog } from '../UI/Dialog';
import { Modal } from '../UI/Modal';

interface Props {
  kataId: string;
  id: number;
}

export const RemoveCommentButton = ({ kataId, id }: Props) => {
  const { deleteComment } = useActions();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onConfirm = () => deleteComment(kataId, id);

  return (
    <>
      <div className="bullet"></div>
      <div className="link" onClick={() => setIsModalOpen(true)}>
        <i className="icon-moon-trash icon-moon"></i>Remove
      </div>
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <Dialog title="Confirm" text="Confirm" onConfirm={onConfirm}>
            You sure you want to remove this comment?
          </Dialog>
        </Modal>
      )}
    </>
  );
};

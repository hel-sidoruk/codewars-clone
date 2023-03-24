import React, { useState } from 'react';
import useActions from '../../hooks/useActions';
import { Dialog } from '../UI/Dialog';
import { Modal } from '../UI/Modal';

export const LockedSolutions = ({ kataId }: { kataId: string }) => {
  const { addToForfeited } = useActions();
  const [isModalOpened, setIsModalOpened] = useState(false);

  const onConfirm = () => {
    addToForfeited(kataId);
    setIsModalOpened(false);
  };

  return (
    <div className="section locked-solutions">
      <h3 className="locked-solutions__title">Solutions have been withheld</h3>
      <p className="locked-solutions__text">
        Since you have not yet solved this kata we have hidden the solutions from you. If you choose
        to view the solutions you will forfeit your eligibility to earn honor/rank progress for this
        kata.
      </p>
      <button className="btn btn-fill" onClick={() => setIsModalOpened(true)}>
        <i className="icon-moon icon-moon-unlock"></i>Unlock Solutions (forfeit eligibility)
      </button>
      {isModalOpened && (
        <Modal onClose={() => setIsModalOpened(false)}>
          <Dialog title="Unlock Solutions" text="Yes, show me the solutions" onConfirm={onConfirm}>
            This will cause you to forfeit your ability to earn honor/rank for this kata. Are you
            sure?
          </Dialog>
        </Modal>
      )}
    </div>
  );
};

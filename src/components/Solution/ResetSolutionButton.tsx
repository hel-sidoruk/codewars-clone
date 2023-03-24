import React, { useState } from 'react';
import useActions from '../../hooks/useActions';
import { Dialog } from '../UI/Dialog';
import { Modal } from '../UI/Modal';

export const ResetSolutionButton = ({ initialSolution }: { initialSolution: string }) => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const { updateSolution } = useActions();

  const onConfirm = () => updateSolution(initialSolution);

  return (
    <>
      <button className="btn btn-dark" onClick={() => setIsModalOpened(true)}>
        reset
      </button>
      {isModalOpened && (
        <Modal onClose={() => setIsModalOpened(false)}>
          <Dialog title="Reset your solution?" text="Yes. Do it!" onConfirm={onConfirm}>
            This will replace your solution with the default setup. Are you sure?
          </Dialog>
        </Modal>
      )}
    </>
  );
};

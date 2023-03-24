import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useActions from '../../hooks/useActions';
import useTypedSelector from '../../hooks/useTypedSelector';
import { Dialog } from '../UI/Dialog';
import { Modal } from '../UI/Modal';

export const ShowSolutionsButton = ({ id }: { id: string }) => {
  const { forfeitedKatas, solvedKatas } = useTypedSelector((state) => state.account);
  const shouldShowSolutions = solvedKatas?.includes(id) || forfeitedKatas?.includes(id);
  const [isModalOpened, setIsModalOpened] = useState(false);
  const { addToForfeited } = useActions();
  const navigate = useNavigate();

  const onConfirm = () => {
    addToForfeited(id);
    navigate(`/kata/${id}/solutions`);
  };

  return shouldShowSolutions ? (
    <Link to={`/kata/${id}/solutions`} className="btn btn-dark">
      <i className="icon-moon icon-moon-compare"></i>
      <span className="btn-text">view solutions</span>
    </Link>
  ) : (
    <>
      <button className="btn btn-dark" onClick={() => setIsModalOpened(true)}>
        <i className="icon-moon icon-moon-unlock"></i>Unlock Solutions
      </button>
      {isModalOpened && (
        <Modal onClose={() => setIsModalOpened(false)}>
          <Dialog title="Unlock Solutions" text="Yes, show me the solutions" onConfirm={onConfirm}>
            This will cause you to forfeit your ability to earn honor/rank for this kata. Are you
            sure?
          </Dialog>
        </Modal>
      )}
    </>
  );
};

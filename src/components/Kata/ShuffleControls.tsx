import React from 'react';
import useActions from '../../hooks/useActions';
import useTypedSelector from '../../hooks/useTypedSelector';
import { ShuffleIcon, UndoIcon } from '../Icons';

export const ShuffleControls = () => {
  const { setRandomKatas } = useActions();
  const { randomKatas } = useTypedSelector((state) => state.katas);

  const getRandom = () => setRandomKatas();
  const undoSample = () => setRandomKatas('reset');

  return (
    <div className="shuffle">
      {randomKatas && (
        <button className="shuffle__btn" onClick={undoSample}>
          <span className="shuffle__tooltip">Undo sample</span>
          <UndoIcon />
        </button>
      )}
      <button className="shuffle__btn" onClick={getRandom}>
        <span className="shuffle__tooltip">Random sample</span>
        <ShuffleIcon />
      </button>
    </div>
  );
};

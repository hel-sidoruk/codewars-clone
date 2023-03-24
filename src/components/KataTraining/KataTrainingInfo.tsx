import React, { useEffect, useState } from 'react';
import useTypedSelector from '../../hooks/useTypedSelector';
import { KataInterface } from '../../types/kata';
import { DropIcon } from '../Icons';
import { KataInstructions } from './KataInstructions';
import { PastSolutions } from './PastSolutions';
import { TestsOutput } from './TestsOutput';

const options = ['Instructions', 'Output', 'Past Solutions'];

interface Props {
  solved: boolean;
  handler: () => void;
  isHidden: boolean;
  kata: KataInterface;
}

export const KataTrainingInfo = ({ solved, handler, isHidden, kata }: Props) => {
  const [active, setActive] = useState(options[0]);
  const [isDescriptionOpen, setDescriptionOpen] = useState(false);
  const [isOutputOpen, setOutputOpen] = useState(false);

  const { isTestsStarted } = useTypedSelector((state) => state.solution);

  const getClassname = (i: number) => {
    return `controls__btn ${active === options[i] ? 'active' : ''}`;
  };

  useEffect(() => {
    if (isTestsStarted) setActive(options[1]);
  }, [isTestsStarted]);

  return (
    <div className="kata-train__info">
      <div className="controls">
        <button
          className={getClassname(0)}
          onClick={() => {
            setActive(options[0]);
            setDescriptionOpen(!isDescriptionOpen);
          }}
        >
          <div>Instructions</div>
          {active === 'Instructions' && (
            <div className={`controls__icon-wrap ${isDescriptionOpen ? 'rotate' : ''}`}>
              <DropIcon />
            </div>
          )}
        </button>
        <button
          className={getClassname(1)}
          onClick={() => {
            setActive(options[1]);
            setOutputOpen(!isOutputOpen);
          }}
        >
          <div>Output</div>
          {active === 'Output' && (
            <div className={`controls__icon-wrap ${isOutputOpen ? 'rotate' : ''}`}>
              <DropIcon />
            </div>
          )}
        </button>
        {solved && (
          <button className={getClassname(2)} onClick={() => setActive(options[2])}>
            Past Solutions
          </button>
        )}
        {isHidden && (
          <button className="controls__btn centered" onClick={handler}>
            <i className="icon-moon icon-moon-collapse"></i>
            Restore
          </button>
        )}
      </div>
      <>
        {active === options[0] ? (
          <div className={`kata-train__descr${isDescriptionOpen ? ' _open' : ''}`}>
            <KataInstructions description={kata.description} tags={kata.tags} />
          </div>
        ) : active === options[1] ? (
          <div className={`kata-train__tests${isOutputOpen ? ' _open' : ''}`}>
            <TestsOutput kataRank={kata.rank} />
          </div>
        ) : (
          <PastSolutions />
        )}
      </>
    </div>
  );
};

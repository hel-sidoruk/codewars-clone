import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { KataInterface } from '../../types/kata';
import { ArrowIcon } from '../Icons';
import { KataInstructions } from '../KataTraining/KataInstructions';

export const HiddenDescription = () => {
  const { kata } = useOutletContext<{ kata: KataInterface }>();
  const [isHidden, setIsHidden] = useState(true);

  return (
    <div className={`section kata-details kata-hide ${isHidden ? 'hide' : ''}`}>
      <div className="toggle-block__header" onClick={() => setIsHidden((state) => !state)}>
        <h3 className="toggle-block__title">Description</h3>
        <ArrowIcon />
      </div>
      {kata && <KataInstructions description={kata.description} tags={kata.tags} />}
    </div>
  );
};

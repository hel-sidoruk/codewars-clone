import React from 'react';
import { KataInterface } from '../../types/kata';
import { Code } from './Code';
import { CodeActionsButtons } from './CodeActionsButtons';

export const Solution = ({ kata }: { kata: KataInterface }) => {
  return (
    <>
      <div className="solution">
        <div className="solution__top">
          <p className="solution__top-text">Solution</p>
        </div>
        <Code initialValue={kata.initialSolution} />
      </div>
      <CodeActionsButtons kata={kata} />
    </>
  );
};

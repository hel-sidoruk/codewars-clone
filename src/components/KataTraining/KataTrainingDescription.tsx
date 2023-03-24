import React from 'react';
import { KataInterface } from '../../types/kata';
import { KataInfo } from '../Kata/KataInfo';
import { KataLanguage } from '../Kata/KataLanguage';

interface Props {
  handler: () => void;
  kata: KataInterface;
}
export const KataTrainingDescription = ({ handler, kata }: Props) => {
  return (
    <div className="kata-description">
      {kata && (
        <>
          <KataInfo data={kata} />
          <KataLanguage kataId={kata.id} />
          <div className="controls">
            <div title="Maximize editor space" onClick={handler}>
              <div className="icon-container">
                <i className="icon-moon icon-moon-expand "></i>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

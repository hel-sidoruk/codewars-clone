import React from 'react';
import { KataInterface } from '../../types/kata';
import { KataInfo } from './KataInfo';
import { KataLanguage } from './KataLanguage';
import { TagsBlock } from './TagsBlock';

export const KataPreview = ({ kata }: { kata: KataInterface }) => {
  return (
    <div className="katas__item kata-item section">
      <div className="kata-item__wrap">
        <KataInfo data={kata} />
        <TagsBlock tags={kata.tags} />
      </div>
      <KataLanguage kataId={kata.id} />
    </div>
  );
};

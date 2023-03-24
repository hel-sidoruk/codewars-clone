import React, { useState } from 'react';
import { CommentsAPI } from '../../api';

interface Props {
  spoiler: boolean;
  id: number;
  kataId: string;
}
export const SpoilerFlag = ({ spoiler, kataId, id }: Props) => {
  const [spoilerMark, setSpoilerMark] = useState(spoiler);

  const toggleSpoiler = async () => {
    setSpoilerMark((state) => !state);
    await CommentsAPI.update(kataId, id, { spoiler: !spoilerMark });
  };

  return (
    <div className={`link ${spoilerMark ? 'spoiler' : ''}`} onClick={toggleSpoiler}>
      <i className="icon-moon-flag icon-moon"></i>
      <span>Spoiler</span>
    </div>
  );
};

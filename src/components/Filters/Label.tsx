import React from 'react';
import { CloseEmptyIcon } from '../Icons';

type LabelProps = {
  text: string;
  cb: (tag: string) => void;
};

const Label = ({ text, cb }: LabelProps) => {
  return (
    <div className="drop-down__label">
      <div>{text}</div>
      <div className="close-icon" onClick={() => cb(text)}>
        <CloseEmptyIcon />
      </div>
    </div>
  );
};

export default Label;

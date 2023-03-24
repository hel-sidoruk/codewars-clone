import React from 'react';
import { getOutputLineClassname } from '../../utils';

export const OutputLine = ({ line }: { line: string }) => {
  return (
    <p className={`${getOutputLineClassname(line)}`}>
      {line.replace(/(^-green|^-red|^-success|^-fail)/, '')}
    </p>
  );
};

import React, { memo } from 'react';
import { nanoid } from 'nanoid';
import useTypedSelector from '../../hooks/useTypedSelector';

interface Props {
  counterRef: React.RefObject<HTMLDivElement>;
}

export const CodeLineCounter = memo(function CodeLineCounter({ counterRef }: Props) {
  const { solution } = useTypedSelector((state) => state.solution);
  return (
    <div className="code__line-counter" ref={counterRef}>
      <div className="code__lines">
        {Array(solution.split('\n').length)
          .fill(0)
          .map((_, i) => (
            <span key={nanoid()}>{i + 1}</span>
          ))}
      </div>
    </div>
  );
});

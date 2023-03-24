import { nanoid } from 'nanoid';
import React, { memo, useState } from 'react';
import useTypedSelector from '../../hooks/useTypedSelector';
import { TestArrowIcon } from '../Icons';
import { OutputLine } from '../UI/OutputLine';

export const TestSuite = memo(function TestSuite({ suite }: { suite: string }) {
  const [title, ...values] = suite.split('\n').filter(Boolean);
  const [isOpened, setIsOpened] = useState(true);
  const { success } = useTypedSelector((state) => state.solution);

  return (
    <div className={`suite ${isOpened ? 'opened' : ''}`}>
      <div className="suite__top" onClick={() => setIsOpened((state) => !state)}>
        <TestArrowIcon fill={`${success ? '#67b04b' : '#c05c48'}`} />
        <span className={`${success && !isOpened ? 'green' : !isOpened ? 'red' : ''}`}>
          {title.replace('--suite-start--', '')}
        </span>
      </div>
      <div className="suite__content">
        {values.map((line) => (
          <OutputLine key={nanoid()} line={line} />
        ))}
      </div>
    </div>
  );
});

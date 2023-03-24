import { nanoid } from 'nanoid';
import React, { memo, useEffect } from 'react';
import { useTesting } from '../../hooks/useTesting';
import useTypedSelector from '../../hooks/useTypedSelector';
import { SUITE_END, SUITE_START } from '../../utils';
import { OutputLine } from '../UI/OutputLine';
import { TestStats } from './TestStats';
import { TestSuite } from './TestSuite';
import { useParams } from 'react-router-dom';

const initialOutputState = 'Your results will be shown here';

export const TestsOutput = memo(function TestsOutput({ kataRank }: { kataRank: string }) {
  const { isTestsStarted, success } = useTypedSelector((state) => state.solution);
  const { id } = useParams();
  const [startTests, output, failure, stats] = useTesting(id as string, kataRank);

  useEffect(() => {
    if (isTestsStarted) startTests();
  }, [isTestsStarted]);

  return (
    <div className={`tests ${success ? 'success' : failure ? 'failure' : ''}`}>
      {stats && <TestStats stats={stats} />}
      <div className="tests__output">
        <div className="tests__text">
          {!output && initialOutputState}
          {stats && <h2 className={`tests__results ${success ? '' : 'error'}`}>Test results: </h2>}
          {output.split(SUITE_END).map((el) =>
            el.includes(SUITE_START) ? (
              <TestSuite key={nanoid()} suite={el} />
            ) : (
              <div key={nanoid()}>
                {el
                  .split('\n')
                  .filter(Boolean)
                  .map((line) => (
                    <OutputLine key={nanoid()} line={line} />
                  ))}
              </div>
            )
          )}
          {success && <div className="tests__congrats"> You have passed all of the tests! :) </div>}
        </div>
      </div>
    </div>
  );
});

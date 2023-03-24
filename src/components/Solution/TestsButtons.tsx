import React from 'react';
import useActions from '../../hooks/useActions';
import useTypedSelector from '../../hooks/useTypedSelector';

export const TestsButtons = ({ handleSubmit }: { handleSubmit: () => void }) => {
  const { isTestsStarted, success, solution } = useTypedSelector((state) => state.solution);
  const { startTesting } = useActions();

  const startTests = (tests: 'all' | 'fixed') => {
    if (!solution) return;
    startTesting(tests);
  };

  return (
    <div className={`code__btns-tests ${isTestsStarted ? 'disabled' : ''}`}>
      <button className="btn" onClick={() => startTests('fixed')}>
        test
      </button>
      {success === 'all' ? (
        <button className="btn btn-fill success" onClick={handleSubmit}>
          submit
        </button>
      ) : (
        <button className="btn btn-fill" onClick={() => startTests('all')}>
          attempt
        </button>
      )}
    </div>
  );
};

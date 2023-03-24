import React, { useEffect, useRef } from 'react';
import useActions from '../../hooks/useActions';
import { useCaretPosition } from '../../hooks/useCaretPosition';
import { useKeyPress } from '../../hooks/useKeyPress';
import useTypedSelector from '../../hooks/useTypedSelector';
import { CodeHighlight } from './CodeHighlight';
import { CodeLineCounter } from './CodeLineCounter';

export const Code = ({ initialValue }: { initialValue: string }) => {
  const [textAreaRef, updateCaret, setCaretPosition] = useCaretPosition();
  const [handleKeyDown] = useKeyPress(textAreaRef, setCaretPosition);
  const { updateSolution } = useActions();
  const { solution } = useTypedSelector((state) => state.solution);
  const codeRef = useRef<HTMLPreElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    updateSolution(e.target.value);
    updateCaret();
  };
  const syncScroll = () => {
    if (codeRef.current && counterRef.current && textAreaRef.current) {
      codeRef.current.scrollTop = textAreaRef.current.scrollTop;
      counterRef.current.scrollTop = textAreaRef.current.scrollTop;
    }
  };
  useEffect(() => {
    updateSolution(initialValue);
  }, [initialValue]);

  return (
    <div className="code">
      <CodeLineCounter counterRef={counterRef} />
      <div className="code__editor-wrapper">
        <CodeHighlight codeRef={codeRef}>{solution}</CodeHighlight>
        <textarea
          spellCheck="false"
          className="code__editor"
          ref={textAreaRef}
          onKeyDown={handleKeyDown}
          value={solution}
          onChange={handleChange}
          onScroll={syncScroll}
        />
      </div>
    </div>
  );
};

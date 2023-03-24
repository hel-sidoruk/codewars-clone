import { useCallback, useEffect, useRef, useState } from 'react';

export function useCaretPosition(): [
  React.RefObject<HTMLTextAreaElement>,
  () => void,
  (n: number) => void
] {
  const ref = useRef<HTMLTextAreaElement>(null);
  const [caretPosition, setCaretPosition] = useState(0);

  const updateCaret = useCallback(() => {
    if (ref.current) {
      const { selectionStart } = ref.current;
      setCaretPosition(selectionStart);
    }
  }, []);

  useEffect(() => {
    if (ref.current) ref.current.setSelectionRange(caretPosition, caretPosition);
  });

  return [ref, updateCaret, setCaretPosition];
}

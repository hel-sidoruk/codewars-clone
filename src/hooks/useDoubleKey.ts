import useActions from './useActions';
import useTypedSelector from './useTypedSelector';

type FnType = (
  ref: React.RefObject<HTMLTextAreaElement>,
  setPosition: (n: number) => void
) => [(s: string) => void];

const doubles: { [key: string]: string } = {
  '{': '}',
  '(': ')',
  '[': ']',
  '"': '"',
  "'": "'",
  '`': '`',
};

export const useDoubleKey: FnType = (ref, setCaretPosition) => {
  const { solution } = useTypedSelector((state) => state.solution);
  const { updateSolution } = useActions();

  const doubleKey = (keyValue: string) => {
    const double = keyValue === 'Tab' ? '  ' : keyValue + doubles[keyValue];

    if (ref.current) {
      const { selectionStart, selectionEnd } = ref.current as HTMLTextAreaElement;
      updateSolution(
        solution.substring(0, selectionStart) + double + solution.substring(selectionEnd)
      );
      setCaretPosition(selectionStart + (keyValue === 'Tab' ? 2 : 1));
    }
  };
  return [doubleKey];
};

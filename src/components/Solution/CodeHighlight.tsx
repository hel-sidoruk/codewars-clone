import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import React, { useEffect, useRef } from 'react';

hljs.registerLanguage('javascript', javascript);

interface Props {
  children: React.ReactNode;
  codeRef?: React.RefObject<HTMLPreElement>;
}

export const CodeHighlight = ({ children, codeRef }: Props) => {
  const ref = useRef<HTMLPreElement>(null);

  useEffect(() => {
    if (ref.current) hljs.highlightElement(ref.current);
  });

  return (
    <pre ref={codeRef}>
      <code ref={ref} className="language-javascript">
        {children}
      </code>
    </pre>
  );
};

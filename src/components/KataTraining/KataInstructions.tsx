import React from 'react';
import { TagsBlock } from '../Kata/TagsBlock';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { CodeHighlight } from '../Solution/CodeHighlight';

interface Props {
  description: string;
  tags: string[];
}
export const KataInstructions = ({ description, tags }: Props) => {
  return (
    <div className="description">
      <div className="markdown mb-32">
        <ReactMarkdown
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /javascript/.exec(className || '');
              return !inline && match ? (
                <CodeHighlight>{String(children).replace(/\n$/, '')}</CodeHighlight>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
          remarkPlugins={[remarkGfm]}
        >
          {description}
        </ReactMarkdown>
      </div>
      <hr />
      <TagsBlock tags={tags} />
    </div>
  );
};

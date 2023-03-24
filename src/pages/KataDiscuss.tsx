import React from 'react';
import { useParams } from 'react-router-dom';
import Article from '../components/Article';
import { HiddenDescription } from '../components/Kata/HiddenDescription';
import { SortBlock } from '../components/Kata/SortBlock';
import { CommentForm } from '../components/KataDiscuss/CommentForm';
import { CommentsList } from '../components/KataDiscuss/CommentsList';
import useActions from '../hooks/useActions';

const sortItems = ['All', 'Issue', 'Questions', 'Suggestions'];

export const KataDiscuss = () => {
  const { id } = useParams();
  const { fetchComments } = useActions();

  const handleSort = (label: string) => {
    if (!id) return;
    if (label === 'Issue') return fetchComments(id, 'Issue');
    if (label === 'Questions') return fetchComments(id, 'Question');
    if (label === 'Suggestions') return fetchComments(id, 'Suggestion');
    else fetchComments(id);
  };

  return (
    <>
      <HiddenDescription />
      <div className="section solution-main">
        <div className="left-bar">
          <div className="sort">
            <SortBlock handler={handleSort} title="View" items={sortItems} />
          </div>
          <Article />
          <Article />
        </div>
        <div className="section comments-section">
          <CommentForm kataId={id as string} />
          <CommentsList kataId={id as string} />
        </div>
      </div>
    </>
  );
};

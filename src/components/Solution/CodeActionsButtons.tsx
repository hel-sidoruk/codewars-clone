import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { SolutionsAPI } from '../../api/SolutionsAPI';
import useActions from '../../hooks/useActions';
import useTypedSelector from '../../hooks/useTypedSelector';
import { KataInterface } from '../../types/kata';
import { ResetSolutionButton } from './ResetSolutionButton';
import { ShowSolutionsButton } from './ShowSolutionsButton';
import { SkipKataButton } from './SkipKataButton';
import { TestsButtons } from './TestsButtons';

export const CodeActionsButtons = ({ kata }: { kata: KataInterface }) => {
  const { updateSolution, setSuccess } = useActions();
  const { id } = useParams();
  const navigate = useNavigate();
  const { success, solution } = useTypedSelector((state) => state.solution);
  const { username } = useTypedSelector((state) => state.account);

  const handleSubmit = async () => {
    setSuccess(null);
    if (id && success && username)
      await SolutionsAPI.addSolution(id, { username, solution, name: kata.name, rank: kata.rank });
    updateSolution('');
    navigate(`/kata/${id}/solutions`);
  };

  return (
    <div className="code__btns">
      <div className="code__btns-actions">
        <SkipKataButton />
        <ShowSolutionsButton id={id as string} />
        <Link to={`/kata/${id}/discuss`} className="btn btn-dark">
          <i className="icon-moon icon-moon-comments"></i>
          <span className="btn-text">discuss</span>
        </Link>
        <ResetSolutionButton initialSolution={kata.initialSolution} />
      </div>
      <TestsButtons handleSubmit={handleSubmit} />
    </div>
  );
};

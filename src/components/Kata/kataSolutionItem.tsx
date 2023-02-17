import React from 'react';
import { Link } from 'react-router-dom';
import { SolutionInterface } from '../../types';
import { CodeHighlight } from '../Solution/CodeHighlight';
import { SolutionControls } from './SolutionControls';

const KataSolutionItem = ({ solution }: { solution: SolutionInterface }) => {
  return (
    <div className="solution-item">
      <div className="solution-item__head">
        <i className="icon-moon-users icon-moon"></i>
        <Link className="link" to={`/users/${solution.username}/`}>
          {solution.username}
        </Link>
      </div>
      <div className="markdown solution-item__code">
        <CodeHighlight>{solution.solution}</CodeHighlight>
      </div>
      <SolutionControls bestPractices={solution.bestPracticesVotes} clever={solution.cleverVotes} />
    </div>
  );
};

export default KataSolutionItem;

import React from 'react';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
import { SolutionInterface } from '../../../../types';
import { Rank } from '../../../Kata/Rank';
import { CodeHighlight } from '../../../Solution/CodeHighlight';

const SolutionItem = ({ solution }: { solution: SolutionInterface }) => {
  return (
    <div className="solutions-one">
      <div className="solutions-one__header">
        <Rank rank={solution.kataRank}></Rank>
        <Link to={`/kata/${solution.kataId}`} className="solutions-one__name">
          {solution.kataName}
        </Link>
      </div>
      <div className="solutions-one__lang">JavaScript:</div>
      <div className="solutions-one__code">
        <CodeHighlight>{solution.solution}</CodeHighlight>
      </div>
      <div className="solutions-one__footer">
        <div className="solutions-one__time">{dayjs(solution.createdAt).fromNow()}</div>
        <Link to={`/kata/${solution.kataId}/train`} className="solutions-one__link">
          Refactor
        </Link>
        <Link to={`/kata/${solution.kataId}/discuss`} className="solutions-one__link">
          Discuss
        </Link>
      </div>
    </div>
  );
};

export default SolutionItem;

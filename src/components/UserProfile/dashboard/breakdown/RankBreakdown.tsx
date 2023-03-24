import React from 'react';
import { rankColorSelector } from '../../../../utils';
import { Rank } from '../../../Kata/Rank';
import PieChart from './PieChart';

type RankBreakdownProps = {
  percent: number;
  nextRank: number;
};

const RankBreakdown = ({ percent, nextRank }: RankBreakdownProps) => {
  return (
    <div className="rank-breakdown">
      <div className="stats__subtitle">
        <i className="icon-moon-ranks2 icon-moon colored"></i>
        Rank Breakdown
      </div>
      <div className="rank-breakdown__wrapper">
        <div className={`rank-breakdown__chart ${rankColorSelector(nextRank)}`}>
          <PieChart percent={percent}></PieChart>
          <div className="rank-breakdown__next">
            Next Rank
            <Rank rank={`${nextRank} kyu`}></Rank>
          </div>
        </div>
        <div className="stats__rank-progress">
          <div>
            <b>Overall:</b> {nextRank + 1} kyu / {percent}%
          </div>
          <div>
            <b>JavaScript:</b> {nextRank + 1} kyu / {percent}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default RankBreakdown;

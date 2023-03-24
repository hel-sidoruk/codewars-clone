import React from 'react';
import { TestsStats } from '../../types';

export const TestStats = ({ stats }: { stats: TestsStats }) => {
  return (
    <div className="tests__stats">
      <span className="time">Time: {stats.duration}ms</span>
      <span className={`${stats.passes ? 'green' : ''}`}>Passed: {stats.passes}</span>
      <span className={`${stats.failures ? 'red' : ''}`}>Failed: {stats.failures}</span>
    </div>
  );
};

import React, { useEffect, useState } from 'react';
import { SolutionsAPI } from '../../../../api/SolutionsAPI';
import { SolutionInterface } from '../../../../types';
import Loader from '../../../UI/Loader';
import SolutionItem from './SolutionItem';

export const SolutionsTab = () => {
  const [solutions, setSolutions] = useState<SolutionInterface[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    SolutionsAPI.getUserSolutions()
      .then(({ solutions }) => solutions && setSolutions(solutions))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="dashboard-wrapper solutions-tab">
      <div className="dashboard-wrapper__sidebar">
        <div className="completed_opened">Completed{!loading && `(${solutions.length})`}</div>
      </div>
      <div className="dashboard-wrapper__content">
        {loading ? (
          <Loader />
        ) : (
          <div className="solutions-tab__list">
            {solutions.length
              ? solutions.map((solution) => <SolutionItem key={solution.id} solution={solution} />)
              : 'No solutions found'}
          </div>
        )}
      </div>
    </div>
  );
};

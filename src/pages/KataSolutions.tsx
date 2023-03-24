import React, { useEffect, useState } from 'react';
import KataSolutionItem from '../components/Kata/kataSolutionItem';
import { SolutionsAPI } from '../api/SolutionsAPI';
import { useParams } from 'react-router';
import { SolutionInterface } from '../types';
import useTypedSelector from '../hooks/useTypedSelector';
import { LockedSolutions } from '../components/Kata/LockedSolutions';
import { HiddenDescription } from '../components/Kata/HiddenDescription';
import Article from '../components/Article';
import { SortBlock } from '../components/Kata/SortBlock';

export const KataSolutions = () => {
  const { id } = useParams();
  const [solutions, setSolutions] = useState<SolutionInterface[]>([]);
  const { solvedKatas, forfeitedKatas } = useTypedSelector((state) => state.account);
  const shouldShowSolutions =
    solvedKatas?.includes(id as string) || forfeitedKatas?.includes(id as string);

  useEffect(() => {
    if (id) SolutionsAPI.getSolutions(id).then((res) => setSolutions(res));
  }, []);

  return (
    <>
      <HiddenDescription />
      <div className="section solution-main">
        <div className="left-bar">
          <div className="sort">
            <SortBlock title="View" items={['All', 'Following', 'Mine']} />
          </div>
          <Article />
          <Article />
        </div>
        <div>
          {shouldShowSolutions ? (
            solutions.map((item) => <KataSolutionItem solution={item} key={item.id} />)
          ) : (
            <LockedSolutions kataId={id as string} />
          )}
        </div>
      </div>
    </>
  );
};

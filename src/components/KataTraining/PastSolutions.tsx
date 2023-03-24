import { nanoid } from 'nanoid';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SolutionsAPI } from '../../api/SolutionsAPI';
import useTypedSelector from '../../hooks/useTypedSelector';
import { SolutionInterface } from '../../types';
import { CodeHighlight } from '../Solution/CodeHighlight';
import Loader from '../UI/Loader';

export const PastSolutions = () => {
  const { id } = useParams();
  const [solutions, setSolutions] = useState<SolutionInterface[]>([]);
  const { username } = useTypedSelector((state) => state.account);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (id && username) {
      setLoading(true);
      SolutionsAPI.getSolutions(id, username)
        .then((res) => setSolutions(res))
        .finally(() => setLoading(false));
    }
  }, []);

  return (
    <div className="kata-train__descr past-solutions">
      {loading && <Loader />}
      {solutions.length
        ? solutions.map(({ solution }) => (
            <div className="markdown past-solutions__item" key={nanoid()}>
              <CodeHighlight>{solution}</CodeHighlight>
            </div>
          ))
        : null}
    </div>
  );
};

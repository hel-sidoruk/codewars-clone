import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { KataLoader } from '../components/KataTraining/KataLoader';
import { KataTrainingDescription } from '../components/KataTraining/KataTrainingDescription';
import { KataTrainingInfo } from '../components/KataTraining/KataTrainingInfo';
import { Solution } from '../components/Solution/Solution';
import useActions from '../hooks/useActions';
import { useFetchKata } from '../hooks/useFetchKata';
import useTypedSelector from '../hooks/useTypedSelector';
import { Page404 } from './Page404';

export const KataTraining = () => {
  const [isHidden, setIsHidden] = useState(false);
  const { id } = useParams();
  const { markAsTrained } = useActions();
  const handleClick = () => setIsHidden((value) => !value);
  const [isSolved, setIsSolved] = useState(false);
  const { trainedKatas, solvedKatas } = useTypedSelector((state) => state.account);
  const { loading } = useTypedSelector((state) => state.katas);
  const [kata, error, isLoading] = useFetchKata(id as string);

  useEffect(() => {
    if (id) {
      if (!trainedKatas?.includes(id) && !solvedKatas?.includes(id)) markAsTrained(id);
      if (solvedKatas?.includes(id)) setIsSolved(true);
    }
  }, [solvedKatas, trainedKatas]);

  useEffect(() => {
    if (kata) document.title = `Training on ${kata.name} | Codewars Clone`;
  }, [kata]);

  if (error) return <Page404 />;
  return (
    <main className={`play-view kata-training ${isHidden ? 'hidden' : ''}`}>
      {(loading || isLoading) && <KataLoader />}
      {!isHidden && (
        <>
          <h1 className="page-title">Kata Training</h1>
          {kata && <KataTrainingDescription handler={handleClick} kata={kata} />}
        </>
      )}
      <section className="kata-train">
        {kata && (
          <KataTrainingInfo
            solved={isSolved}
            handler={handleClick}
            isHidden={isHidden}
            kata={kata}
          />
        )}
        <div className="kata-train__code">{kata && <Solution kata={kata} />}</div>
      </section>
    </main>
  );
};

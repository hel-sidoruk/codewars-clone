import React, { useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { KataControls } from '../components/Kata/KataControls';
import { KataDescription } from '../components/Kata/KataDescription';
import { KataLoader } from '../components/KataTraining/KataLoader';
import useActions from '../hooks/useActions';
import { useFetchKata } from '../hooks/useFetchKata';
import useTypedSelector from '../hooks/useTypedSelector';
import { Page404 } from './Page404';

export const Kata = () => {
  const { id } = useParams();

  const [kata, error, isKataLoading] = useFetchKata(id as string);
  const { fetchComments } = useActions();
  const { loading } = useTypedSelector((state) => state.katas);

  useEffect(() => {
    if (id) fetchComments(id);
  }, [id]);

  useEffect(() => {
    if (kata) document.title = `${kata.name} | Codewars Clone`;
  }, [kata]);

  if (error) return <Page404 />;
  return (
    <main className="play-view">
      {(loading || isKataLoading) && <KataLoader />}
      <h1 className="page-title">Kata</h1>
      {kata && <KataDescription kata={kata} />}
      <KataControls />
      <Outlet context={{ kata }} />
    </main>
  );
};

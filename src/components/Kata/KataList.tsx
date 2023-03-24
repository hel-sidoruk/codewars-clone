import React from 'react';
import useInfiniteList from '../../hooks/useInfiniteList';
import useTypedSelector from '../../hooks/useTypedSelector';
import { KataInterface } from '../../types/kata';
import Loader from '../UI/Loader';
import { KataPreview } from './KataPreview';

export const KataList = () => {
  const { katas, nextKatasLoading, randomKatas } = useTypedSelector((state) => state.katas);
  const [intersectedRef] = useInfiniteList();

  const renderKata = (kata: KataInterface) => <KataPreview kata={kata} key={kata.id} />;

  return (
    <div className="library__katas katas">
      {randomKatas ? randomKatas.map(renderKata) : katas.map(renderKata)}
      {!randomKatas && (
        <div className="library__loader" ref={intersectedRef}>
          {nextKatasLoading && <Loader />}
        </div>
      )}
    </div>
  );
};

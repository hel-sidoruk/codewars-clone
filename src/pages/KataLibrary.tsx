import React, { useEffect } from 'react';
import Article from '../components/Article';
import { FeaturedTags } from '../components/FeaturedTags';
import Filters from '../components/Filters/Filters';
import { KataList } from '../components/Kata/KataList';
import { ShuffleControls } from '../components/Kata/ShuffleControls';
import Loader from '../components/UI/Loader';
import useActions from '../hooks/useActions';
import useTypedSelector from '../hooks/useTypedSelector';

export const KataLibrary = ({ title }: { title: string }) => {
  const { katas, totalCount, loading, randomKatas } = useTypedSelector((state) => state.katas);
  const { fetchKatas, resetFilters } = useActions();
  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    resetFilters();
    fetchKatas();
  }, []);

  return (
    <main className="play-view">
      <h1 className="page-title">Kata Library</h1>
      <div className="library">
        <div className="library__container">
          <div className="library__header">
            <i className="icon-moon icon-moon-compare"></i>
            Library
          </div>
          <div className="library__controls">
            <span>
              {loading
                ? 'Loading...'
                : `${randomKatas ? randomKatas.length : totalCount} Kata Found`}
            </span>
            {!loading && <ShuffleControls />}
          </div>
          <div className="library__bar">
            <Filters />
            <Article />
            <Article />
          </div>
          <div className="library__tags">
            <span>FEATURED TAGS</span>
            <FeaturedTags />
          </div>
          {loading && <Loader />}
          {katas.length ? <KataList /> : null}
        </div>
      </div>
    </main>
  );
};

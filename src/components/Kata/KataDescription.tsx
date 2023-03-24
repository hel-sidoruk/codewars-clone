import React, { memo, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { KataAPI } from '../../api';
import useTypedSelector from '../../hooks/useTypedSelector';
import { KataInterface } from '../../types/kata';
import { KataInfo } from './KataInfo';
import { KataLanguage } from './KataLanguage';

export const KataDescription = memo(function KataDescription({ kata }: { kata: KataInterface }) {
  const { id } = useParams();
  const { katasByID } = useTypedSelector((state) => state.katas);
  const { solvedKatas, trainedKatas } = useTypedSelector((state) => state.account);
  const [nextKataID, setNextKataID] = useState('');
  const [isTrained, setIsTrained] = useState(false);

  useEffect(() => {
    if (id && solvedKatas && trainedKatas)
      setIsTrained(solvedKatas.includes(id) || trainedKatas.includes(id));
  }, [id, katasByID, solvedKatas, trainedKatas]);

  useEffect(() => {
    KataAPI.getRandomId().then((id) => setNextKataID(id));
  }, [id]);

  return (
    <div className="kata-description section">
      <KataInfo data={kata} />
      <KataLanguage kataId={kata.id} />
      <div className="kata__controls">
        <Link to={`/kata/${kata.id}/train`} className={`btn ${isTrained ? '' : 'btn-fill'}`}>
          {isTrained ? (
            <i className="icon-moon icon-moon-refresh"></i>
          ) : (
            <i className="icon-moon icon-moon-play"></i>
          )}
          {isTrained ? 'Train again' : 'Train'}
        </Link>
        <Link to={`/kata/${nextKataID}`} className={`btn ${isTrained ? 'btn-fill' : ''}`}>
          <i className="icon-moon icon-moon-play"></i>
          Next kata
        </Link>
      </div>
    </div>
  );
});

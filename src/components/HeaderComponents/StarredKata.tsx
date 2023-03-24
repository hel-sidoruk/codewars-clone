import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { KataAPI } from '../../api';
import useActions from '../../hooks/useActions';
import useTypedSelector from '../../hooks/useTypedSelector';
import { KataInterface } from '../../types/kata';
import { Rank } from '../Kata/Rank';

export const StarredKata = ({ id }: { id: string }) => {
  const { addStarredKata } = useActions();
  const { starredKatasList } = useTypedSelector((state) => state.katas);
  const [kata, setKata] = useState<KataInterface | null>(null);

  useEffect(() => {
    const kataItem = starredKatasList.find((item) => item.id === id);
    if (kataItem) setKata(kataItem);
    else {
      KataAPI.getOne(id).then((res) => {
        setKata(res);
        addStarredKata(res);
      });
    }
  }, [kata]);

  return (
    <li>
      <Link className="header__menu-item link" to={`/kata/${id}`}>
        {kata && (
          <>
            <Rank rank={kata.rank} />
            <span className="link-title">{kata.name}</span>
          </>
        )}
      </Link>
    </li>
  );
};

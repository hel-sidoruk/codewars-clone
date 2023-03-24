import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useActions from '../../hooks/useActions';
import useTypedSelector from '../../hooks/useTypedSelector';
import { KataInterface } from '../../types/kata';
import { CheckIcon } from '../Icons';
import { Rank } from './Rank';

export const KataInfo = ({ data }: { data: KataInterface }) => {
  const { addToStarred } = useActions();
  const [isStarred, setIsStarred] = useState(false);
  const { starredKatas, solvedKatas } = useTypedSelector((state) => state.account);
  const [starsCount, setStarsCount] = useState(data.totalStars);
  const [isSolved, setIsSolved] = useState(false);

  useEffect(() => {
    starredKatas?.includes(data.id) && setIsStarred(true);
  }, [starredKatas, data.id]);

  useEffect(() => {
    if (solvedKatas && solvedKatas.includes(data.id)) setIsSolved(true);
  }, [solvedKatas, data.id]);

  const handleClick = () => {
    const isInStarred = starredKatas?.includes(data.id);
    setIsStarred(!isInStarred);
    setStarsCount((stars) => (isInStarred ? stars - 1 : stars + 1));
    addToStarred(data.id, data.totalStars);
  };

  return (
    <div className="kata__info">
      <div className="kata__info-top">
        <Rank rank={data.rank} />
        <h4 className="kata__info-title">
          <Link to={`/kata/${data.id}/`}>{data.name}</Link>
        </h4>
        {isSolved && <CheckIcon />}
      </div>
      <div className="kata__info-bottom">
        <span className="kata__info-text star" onClick={handleClick}>
          <i className={`icon-moon ${isStarred ? 'icon-moon-star' : 'icon-moon-star-empty'}`}></i>
          {starsCount}
        </span>
        <span className="kata__info-text">
          <i className="icon-moon icon-moon-bullseye"></i>
          {`${data.totalCompleted} of ${data.totalAttempts}`}
        </span>
        <Link to={`/users/${data.createdBy}/`} className="kata__info-text link">
          <i className="icon-moon icon-moon-user"></i>
          {data.createdBy}
        </Link>
      </div>
    </div>
  );
};

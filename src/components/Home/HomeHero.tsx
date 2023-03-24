import React from 'react';
import { Link } from 'react-router-dom';
import useTypedSelector from '../../hooks/useTypedSelector';

export const HomeHero = () => {
  const { isAuthorized } = useTypedSelector((state) => state.authorizedUser);

  return (
    <div className="home__hero">
      <h1 className="home__title">
        <span>Achieve mastery</span>
        {'\nthrough challenge'}
      </h1>
      <p className="home__text text">
        {
          'Improve your development skills by training with your peers on code kata that continuously\nchallenge and push your coding practice.'
        }
      </p>
      <div className="home__buttons">
        <Link className="home__btn" to={isAuthorized ? '/kata' : '/login'}>
          Get started
        </Link>
      </div>
    </div>
  );
};

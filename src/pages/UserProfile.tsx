import React, { useEffect } from 'react';
import Article from '../components/Article';
import ReferalBlock from '../components/UserProfile/ReferalBlock';
import UserInfo from '../components/UserProfile/UserInfo';
import UserStats from '../components/UserProfile/UserStats';
import { useParams } from 'react-router-dom';
import useActions from '../hooks/useActions';
import useTypedSelector from '../hooks/useTypedSelector';
import { Page404 } from './Page404';

export const UserProfile = () => {
  const { id } = useParams();
  const { setCurrentUser } = useActions();
  const { error, currentUser } = useTypedSelector((state) => state.user);

  useEffect(() => {
    if (id) setCurrentUser(id);
  }, [id]);

  useEffect(() => {
    if (currentUser) document.title = `${currentUser.username} | Codewars`;
  }, [currentUser]);

  if (error) return <Page404 />;
  return (
    <main className="play-view user-profile">
      <div className="user-profile__container">
        <UserInfo />
        <div className="user-profile__promo-block">
          <ReferalBlock />
          <Article />
        </div>
        <UserStats />
      </div>
    </main>
  );
};

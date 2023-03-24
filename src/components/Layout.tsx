import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useActions from '../hooks/useActions';
import useTypedSelector from '../hooks/useTypedSelector';
import { Footer } from './Footer';
import { Header } from './Header';
import { HeaderHome } from './Home/HeaderHome';
import { Sidebar } from './Sidebar';
import { Popup } from './UI/Popup';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();
  const { checkUser, setAccount } = useActions();
  const { isAuthorized } = useTypedSelector((state) => state.authorizedUser);
  const { newItems } = useTypedSelector((state) => state.notifications);

  useEffect(() => {
    checkUser();
  }, []);

  useEffect(() => {
    if (isAuthorized) setAccount();
  }, [isAuthorized]);

  if (pathname === '/login' || pathname === '/registration') return <>{children}</>;
  return (
    <>
      {pathname === '/' ? (
        <HeaderHome />
      ) : (
        <>
          <Sidebar />
          <Header />
          {newItems.length ? <Popup /> : <></>}
        </>
      )}
      {children}
      <Footer />
    </>
  );
};

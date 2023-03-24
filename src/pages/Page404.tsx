import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Page404 = () => {
  useEffect(() => {
    document.title = 'Not found';
  }, []);

  return (
    <div className="page-404">
      <div className="page-404__content">
        <img src="https://uploads-ssl.webflow.com/62e3ee10882dc50bcae8d07a/632615af0bde3512ecfb2718_codewars-logo.svg" />
        <div className="page-404__text">
          <p className="page-404__error">404 error</p>
          <h1 className="page-404__title">We can&apos;t find that page.</h1>
          <p className="page-404__descr">
            Sorry, the page you are looking for doesn&apos;t exist or has been moved.
          </p>
        </div>
        <Link to="/" className="page-404__btn">
          Take me home
        </Link>
      </div>
    </div>
  );
};

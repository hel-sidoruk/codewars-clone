import React from 'react';
import { GithubIcon } from './Icons';
import { RSIcon } from './Icons/RSIcon';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__block">
          Created by
          <div className="footer__githubs">
            <a href="https://github.com/hel-sidoruk">
              <GithubIcon />
              Hel-sidoruk
            </a>
            <a href="https://github.com/avsamoilava">
              <GithubIcon />
              Avsamoilava
            </a>
            <a href="https://github.com/pashabn">
              <GithubIcon />
              Pashabn
            </a>
          </div>
        </div>
        <div className="footer__block">
          <span>© HAPsoft</span>
          <span>2023</span>
        </div>
        <a className="rs-link" href="https://rs.school/js/">
          <RSIcon />
        </a>
      </div>
    </footer>
  );
};

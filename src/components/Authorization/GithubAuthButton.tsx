import React from 'react';
import { CLIENT_ID_LOGIN, CLIENT_ID_REGISTRATION, GITHUB_AUTH_URL } from '../../utils';
import { GithubIcon } from '../Icons';

export const GithubAuthButton = ({ option }: { option: 'login' | 'registration' }) => {
  const isLoginPage = option === 'login';

  return (
    <a
      href={`${GITHUB_AUTH_URL}?client_id=${
        isLoginPage ? CLIENT_ID_LOGIN : CLIENT_ID_REGISTRATION
      }&scope=user`}
      className="auth__github-btn"
    >
      <span>{isLoginPage ? 'Sign in with Github' : 'Sign up with Github'}</span>
      <GithubIcon />
    </a>
  );
};

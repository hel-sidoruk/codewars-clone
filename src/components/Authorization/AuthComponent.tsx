import React from 'react';
import { Link } from 'react-router-dom';
import useTypedSelector from '../../hooks/useTypedSelector';
import { AuthForm } from './AuthForm';
import { GithubAuthButton } from './GithubAuthButton';
import { LoginSuggest } from './LoginSuggest';
import { SignUpSuggest } from './SignUpSuggest';

export const AuthComponent = ({ option }: { option: 'login' | 'registration' }) => {
  const isLoginPage = option === 'login';
  const { authError, loading } = useTypedSelector((state) => state.authorizedUser);

  return (
    <div className={`auth__form-container ${loading ? 'disabled' : ''}`}>
      <Link to="/" className="auth__home-link">
        <img src="/logo-square.png" />
      </Link>
      <GithubAuthButton option={option} />
      <div className="auth__line">
        <span>OR</span>
      </div>
      <div className="auth__error">{authError && <span>{authError}</span>}</div>
      <AuthForm option={option} />
      {isLoginPage ? <SignUpSuggest /> : <LoginSuggest />}
    </div>
  );
};

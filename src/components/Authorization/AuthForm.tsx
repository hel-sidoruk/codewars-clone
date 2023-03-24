import React, { useState } from 'react';
import useActions from '../../hooks/useActions';
import useTypedSelector from '../../hooks/useTypedSelector';
import { PasswordIcon } from '../Icons';

export const AuthForm = ({ option }: { option: 'login' | 'registration' }) => {
  const isLoginPage = option === 'login';

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login, registration, clearError } = useActions();
  const { authError } = useTypedSelector((state) => state.authorizedUser);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    isLoginPage ? login({ username, password }) : registration({ username, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="auth__inputs-box">
        <div className="input-wrapper">
          <i className="icon-moon icon-moon-user"></i>
          <input
            className="auth__input"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              if (authError) clearError();
            }}
            placeholder="username"
          />
        </div>
        <div className="input-wrapper">
          <PasswordIcon />
          <input
            className="auth__input"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (authError) clearError();
            }}
            placeholder="password"
            type="password"
          />
        </div>
      </div>
      <button className="auth__submit-btn" type="submit">
        {isLoginPage ? 'Sign in' : 'Sign up'}
      </button>
    </form>
  );
};

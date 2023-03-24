import React from 'react';
import { Link } from 'react-router-dom';
import useActions from '../../hooks/useActions';
import useTypedSelector from '../../hooks/useTypedSelector';

export const LoginSuggest = () => {
  const { authError } = useTypedSelector((state) => state.authorizedUser);
  const { clearError } = useActions();

  return (
    <div className="auth__registration-link">
      <Link className="underline" to="/login" onClick={() => authError && clearError()}>
        Sign in
      </Link>
      <span>if you already have an account.</span>
    </div>
  );
};

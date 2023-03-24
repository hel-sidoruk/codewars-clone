import React from 'react';
import { Link } from 'react-router-dom';
import useActions from '../../hooks/useActions';
import useTypedSelector from '../../hooks/useTypedSelector';

export const SignUpSuggest = () => {
  const { authError } = useTypedSelector((state) => state.authorizedUser);
  const { clearError } = useActions();

  return (
    <div className="auth__registration-link">
      <Link className="underline" to="/registration" onClick={() => authError && clearError()}>
        Sign up
      </Link>
      <span>if you don&apos;t have an account yet.</span>
    </div>
  );
};

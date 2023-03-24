import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { AuthComponent } from '../components/Authorization/AuthComponent';
import Loader from '../components/UI/Loader';
import useActions from '../hooks/useActions';
import useTypedSelector from '../hooks/useTypedSelector';

interface Props {
  option: 'login' | 'registration';
  title: string;
}
export const Authorization = ({ option, title }: Props) => {
  const [params] = useSearchParams();
  const { githubLogin, githubRegistration } = useActions();
  const { loading, isAuthorized } = useTypedSelector((state) => state.authorizedUser);
  const navigate = useNavigate();

  useEffect(() => {
    const { code } = Object.fromEntries(params.entries());
    if (!code) return;
    option === 'login' ? githubLogin(code) : githubRegistration(code);
  }, [params]);

  useEffect(() => {
    isAuthorized && navigate('/');
  }, [isAuthorized]);

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div className="auth">
      {loading && <Loader />}
      <AuthComponent option={option} />
    </div>
  );
};

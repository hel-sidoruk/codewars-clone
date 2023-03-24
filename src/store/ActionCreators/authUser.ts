import { Dispatch } from 'redux';
import { AuthAPI } from '../../api/AuthAPI';
import { ThunkActionType } from '../../types';
import { AuthUserAction, AuthUserActionTypes } from '../../types/authUser';

export function checkUser(): ThunkActionType {
  return async (dispatch: Dispatch<AuthUserAction>) => {
    const { username } = await AuthAPI.check();
    if (username)
      dispatch({
        type: AuthUserActionTypes.SET_USER_SUCCESS,
        payload: { isAuthorized: true, username },
      });
  };
}

export function signOut(): ThunkActionType {
  return (dispatch: Dispatch<AuthUserAction>) => {
    localStorage.removeItem('token');
    dispatch({ type: AuthUserActionTypes.SIGN_OUT });
  };
}

export const clearError = (): ThunkActionType => (dispatch: Dispatch<AuthUserAction>) =>
  dispatch({ type: AuthUserActionTypes.CLEAR_ERROR });

export function login(user: { username: string; password: string }): ThunkActionType {
  return async (dispatch: Dispatch<AuthUserAction>) => {
    dispatch({ type: AuthUserActionTypes.SET_USER });
    const { username, error } = await AuthAPI.login(user);
    if (username)
      dispatch({
        type: AuthUserActionTypes.SET_USER_SUCCESS,
        payload: { isAuthorized: true, username },
      });
    if (error) dispatch({ type: AuthUserActionTypes.AUTH_ERROR, payload: { authError: error } });
  };
}

export function registration(user: { username: string; password: string }): ThunkActionType {
  return async (dispatch: Dispatch<AuthUserAction>) => {
    dispatch({ type: AuthUserActionTypes.SET_USER });
    const { username, error } = await AuthAPI.registration(user);
    if (username)
      dispatch({
        type: AuthUserActionTypes.SET_USER_SUCCESS,
        payload: { isAuthorized: true, username },
      });

    if (error) dispatch({ type: AuthUserActionTypes.AUTH_ERROR, payload: { authError: error } });
  };
}

export function githubLogin(code: string): ThunkActionType {
  return async (dispatch: Dispatch<AuthUserAction>) => {
    dispatch({ type: AuthUserActionTypes.SET_USER });
    const { username, error } = await AuthAPI.githubLogin(code);
    if (username)
      dispatch({
        type: AuthUserActionTypes.SET_USER_SUCCESS,
        payload: { isAuthorized: true, username },
      });
    if (error) dispatch({ type: AuthUserActionTypes.AUTH_ERROR, payload: { authError: error } });
  };
}

export function githubRegistration(code: string): ThunkActionType {
  return async (dispatch: Dispatch<AuthUserAction>) => {
    dispatch({ type: AuthUserActionTypes.SET_USER });
    const { username, error } = await AuthAPI.githubRegistration(code);
    if (username)
      dispatch({
        type: AuthUserActionTypes.SET_USER_SUCCESS,
        payload: { isAuthorized: true, username },
      });
    if (error) dispatch({ type: AuthUserActionTypes.AUTH_ERROR, payload: { authError: error } });
  };
}

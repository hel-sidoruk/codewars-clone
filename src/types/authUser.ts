export interface AuthUserState {
  isAuthorized: boolean;
  username: string;
  authError: null | string;
  loading: boolean;
}

export enum AuthUserActionTypes {
  SET_USER = 'SET_USER',
  SET_USER_SUCCESS = 'SET_USER_SUCCESS',
  SIGN_OUT = 'SIGN_OUT',
  AUTH_ERROR = 'AUTH_ERROR',
  CLEAR_ERROR = 'CLEAR_ERROR',
}

interface SetUser {
  type: AuthUserActionTypes.SET_USER;
}
interface SetUserSuccess {
  type: AuthUserActionTypes.SET_USER_SUCCESS;
  payload: {
    isAuthorized: boolean;
    username: string;
  };
}
interface SignOut {
  type: AuthUserActionTypes.SIGN_OUT;
}

interface ClearError {
  type: AuthUserActionTypes.CLEAR_ERROR;
}

interface SetAuthError {
  type: AuthUserActionTypes.AUTH_ERROR;
  payload: {
    authError: string;
  };
}

export type AuthUserAction = SetUser | SetUserSuccess | SignOut | SetAuthError | ClearError;

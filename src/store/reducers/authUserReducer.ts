import { AuthUserAction, AuthUserActionTypes, AuthUserState } from '../../types/authUser';

const initialState: AuthUserState = {
  isAuthorized: false,
  username: '',
  authError: null,
  loading: false,
};

export default function authUserReducer(
  state: AuthUserState = initialState,
  action: AuthUserAction
) {
  switch (action.type) {
    case AuthUserActionTypes.SET_USER:
      return {
        ...state,
        loading: true,
      };
    case AuthUserActionTypes.SET_USER_SUCCESS:
      return {
        ...state,
        isAuthorized: action.payload.isAuthorized,
        username: action.payload.username,
        authError: null,
        loading: false,
      };
    case AuthUserActionTypes.AUTH_ERROR:
      return {
        ...state,
        authError: action.payload.authError,
        loading: false,
      };
    case AuthUserActionTypes.SIGN_OUT:
      return {
        ...state,
        authError: null,
        isAuthorized: false,
        username: '',
      };
    case AuthUserActionTypes.CLEAR_ERROR:
      return {
        ...state,
        authError: null,
      };
    default:
      return state;
  }
}

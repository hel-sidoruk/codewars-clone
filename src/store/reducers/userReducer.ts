import { UserAction, UserActionTypes, UserState } from '../../types/user';

const initialState: UserState = {
  currentUser: null,
  following: [],
  followers: [],
  loading: false,
  error: false,
};

export const userReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionTypes.FETCH_USER:
      return { ...state, loading: true, error: false };
    case UserActionTypes.FETCH_USER_ERROR:
      return { ...state, loading: false, error: true };
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload.currentUser,
        following: action.payload.following,
        followers: action.payload.followers,
        loading: false,
      };
    default:
      return state;
  }
};

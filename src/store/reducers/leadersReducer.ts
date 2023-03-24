import { LeaderAction, LeadersActionTypes, LeaderUserState } from '../../types/leader';

const initialState: LeaderUserState = {
  error: null,
  loading: false,
  users: [],
};

export default function leaderReducer(state: LeaderUserState = initialState, action: LeaderAction) {
  switch (action.type) {
    case LeadersActionTypes.FETCH_LEADERS:
      return { ...state, loading: true };
    case LeadersActionTypes.FETCH_LEADERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload.users,
      };
    case LeadersActionTypes.FETCH_LEADERS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
}

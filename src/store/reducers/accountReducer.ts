import { AccountAction, AccountActionTypes, AccountState } from '../../types/account';

const initialState: AccountState = {
  username: null,
  avatar: null,
  solvedKatas: null,
  trainedKatas: null,
  starredKatas: null,
  forfeitedKatas: null,
  rank: null,
  score: null,
  honor: null,
  clan: null,
  name: null,
};

export default function accountReducer(state: AccountState = initialState, action: AccountAction) {
  switch (action.type) {
    case AccountActionTypes.SET_ACCOUNT:
      return {
        ...state,
        username: action.payload.username,
        avatar: action.payload.avatar,
        solvedKatas: action.payload.solvedKatas,
        trainedKatas: action.payload.trainedKatas,
        starredKatas: action.payload.starredKatas,
        forfeitedKatas: action.payload.forfeitedKatas,
        rank: action.payload.rank,
        honor: action.payload.honor,
        score: action.payload.score,
        clan: action.payload.clan,
        name: action.payload.name,
      };
    case AccountActionTypes.EDIT_INFO:
      return {
        ...state,
        username: action.payload.username,
        clan: action.payload.clan,
        name: action.payload.name,
        avatar: action.payload.avatar ? action.payload.avatar : state.avatar,
      };
    case AccountActionTypes.SIGN_OUT_ACCOUNT:
      return {
        ...state,
        username: null,
        avatar: null,
        solvedKatas: null,
        trainedKatas: null,
        starredKatas: null,
        forfeitedKatas: null,
        rank: null,
        honor: null,
        score: null,
        clan: null,
        name: null,
      };
    case AccountActionTypes.MARK_AS_TRAINED:
      return {
        ...state,
        trainedKatas: action.payload.trainedKatas,
      };
    case AccountActionTypes.MARK_AS_SOLVED:
      return {
        ...state,
        trainedKatas: action.payload.trainedKatas,
        solvedKatas: action.payload.solvedKatas,
      };
    case AccountActionTypes.ADD_TO_STARRED:
      return {
        ...state,
        starredKatas: action.payload.starredKatas,
      };
    case AccountActionTypes.ADD_TO_FORFEITED:
      return {
        ...state,
        forfeitedKatas: action.payload.forfeitedKatas,
      };
    case AccountActionTypes.UPDATE_USER_PROGRESS:
      return {
        ...state,
        rank: action.payload.rank,
        honor: action.payload.honor,
        score: action.payload.score,
      };
    default:
      return state;
  }
}

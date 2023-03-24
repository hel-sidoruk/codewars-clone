export interface AccountInterface {
  id: string;
  username: string;
  password: string | null;
  github: string | null;
  solvedKatas: string[];
  trainedKatas: string[];
  starredKatas: string[];
  forfeitedKatas: string[];
}
export interface AccountInfo {
  username: string;
  clan: string;
  name: string;
  avatar?: string;
}
export interface AccountState {
  username: string | null;
  avatar: string | null;
  solvedKatas: string[] | null;
  trainedKatas: string[] | null;
  starredKatas: string[] | null;
  forfeitedKatas: string[] | null;
  rank: string | null;
  score: number | null;
  honor: number | null;
  clan: string | null;
  name: string | null;
}

export enum AccountActionTypes {
  SET_ACCOUNT = 'SET_ACCOUNT',
  EDIT_INFO = 'EDIT_INFO',
  SIGN_OUT_ACCOUNT = 'SIGN_OUT_ACCOUNT',
  MARK_AS_TRAINED = 'MARK_AS_TRAINED',
  MARK_AS_SOLVED = 'MARK_AS_SOLVED',
  ADD_TO_STARRED = 'ADD_TO_STARRED',
  ADD_TO_FORFEITED = 'ADD_TO_FORFEITED',
  UPDATE_USER_PROGRESS = 'UPDATE_USER_PROGRESS',
}
interface SetAccount {
  type: AccountActionTypes.SET_ACCOUNT;
  payload: {
    username: string;
    avatar: string | null;
    solvedKatas: string[];
    trainedKatas: string[];
    starredKatas: string[];
    forfeitedKatas: string[];
    rank: string;
    honor: number;
    score: number;
    clan: string | null;
    name: string | null;
  };
}
interface EditInfo {
  type: AccountActionTypes.EDIT_INFO;
  payload: {
    username: string;
    clan: string;
    name: string;
    avatar?: string;
  };
}
interface SignOut {
  type: AccountActionTypes.SIGN_OUT_ACCOUNT;
}
interface MarkAsTrained {
  type: AccountActionTypes.MARK_AS_TRAINED;
  payload: {
    trainedKatas: string[];
  };
}
interface MarkAsSolved {
  type: AccountActionTypes.MARK_AS_SOLVED;
  payload: {
    trainedKatas: string[];
    solvedKatas: string[];
  };
}
interface AddToStarred {
  type: AccountActionTypes.ADD_TO_STARRED;
  payload: {
    starredKatas: string[];
  };
}
interface AddToForfeited {
  type: AccountActionTypes.ADD_TO_FORFEITED;
  payload: {
    forfeitedKatas: string[];
  };
}
interface UpdateUserProgress {
  type: AccountActionTypes.UPDATE_USER_PROGRESS;
  payload: {
    rank: string;
    score: number;
    honor: number;
  };
}

export type AccountAction =
  | SetAccount
  | EditInfo
  | SignOut
  | MarkAsTrained
  | MarkAsSolved
  | AddToStarred
  | UpdateUserProgress
  | AddToForfeited;

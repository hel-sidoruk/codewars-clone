import { FollowerInterface } from './followers';

export interface UserInterface {
  id: string;
  name: string | null;
  leaderboardPosition: number;
  username: string;
  honor: number;
  clan: string;
  totalCompleted: number;
  rank: string;
  score: number;
  avatar: string;
}

export interface UserState {
  currentUser: UserInterface | null;
  following: FollowerInterface[];
  followers: FollowerInterface[];
  loading: boolean;
  error: boolean;
}

export enum UserActionTypes {
  FETCH_USER = 'FETCH_USER',
  FETCH_USER_ERROR = 'FETCH_USER_ERROR',
  SET_CURRENT_USER = 'SET_CURRENT_USER',
}

interface FetchUser {
  type: UserActionTypes.FETCH_USER | UserActionTypes.FETCH_USER_ERROR;
}
interface SetUserAction {
  type: UserActionTypes.SET_CURRENT_USER;
  payload: {
    currentUser: UserInterface;
    following: FollowerInterface[];
    followers: FollowerInterface[];
  };
}

export type UserAction = FetchUser | SetUserAction;

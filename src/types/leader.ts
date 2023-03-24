import { UserInterface } from './user';

export interface LeaderUserState {
  users: UserInterface[];
  error: null | string;
  loading: boolean;
}

export enum LeadersActionTypes {
  FETCH_LEADERS = 'FETCH_LEADERS',
  FETCH_LEADERS_SUCCESS = 'FETCH_LEADERS_SUCCESS',
  FETCH_LEADERS_ERROR = 'FETCH_LEADERS_ERROR',
}

interface FetchLeaders {
  type: LeadersActionTypes.FETCH_LEADERS;
}

interface FetchLeadersSuccess {
  type: LeadersActionTypes.FETCH_LEADERS_SUCCESS;
  payload: {
    users: UserInterface[];
  };
}

interface FetchLeadersError {
  type: LeadersActionTypes.FETCH_LEADERS_ERROR;
  payload: {
    error: string;
  };
}

export type LeaderAction = FetchLeaders | FetchLeadersSuccess | FetchLeadersError;

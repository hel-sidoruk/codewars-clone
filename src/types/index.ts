import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../store/reducers';

export type ThunkActionType = ThunkAction<void, RootState, unknown, Action<string>>;

export interface TestsStats {
  duration: number;
  failures: number;
  passes: number;
  pending: number;
  tests: number;
}

export interface SolutionInterface {
  id: string;
  kataId: string;
  kataRank: string;
  kataName: string;
  username: string;
  solution: string;
  createdAt: string;
  cleverVotes: number;
  bestPracticesVotes: number;
}

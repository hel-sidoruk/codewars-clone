export interface KataInterface {
  id: string;
  name: string;
  description: string;
  totalAttempts: number;
  totalCompleted: number;
  totalStars: number;
  slug: string;
  publishedAt: number;
  createdAt: number;
  rank: string;
  category: string;
  tags: string[];
  createdBy: string;
  initialSolution: string;
}

export interface KataState {
  katas: KataInterface[];
  katasByID: KatasById | null;
  starredKatasList: KataInterface[];
  randomKatas: KataInterface[] | null;
  loading: boolean;
  nextKatasLoading: boolean;
  error: null | string;
  totalCount: number;
  page: number;
  filters: string;
}

export type KatasById = {
  [id: string]: KataInterface;
};

export enum KatasActionTypes {
  FETCH_KATAS = 'FETCH_KATAS',
  FETCH_KATAS_SUCCESS = 'FETCH_KATAS_SUCCESS',
  FETCH_KATAS_ERROR = 'FETCH_KATAS_ERROR',
  FETCH_NEXT_KATAS = 'FETCH_NEXT_KATAS',
  FETCH_NEXT_KATAS_SUCCESS = 'FETCH_NEXT_KATAS_SUCCESS',
  ADD_STARRED_KATA = 'ADD_STARRED_KATA',
  SET_RANDOM_KATAS = 'SET_RANDOM_KATAS',
}

interface FetchKatas {
  type: KatasActionTypes.FETCH_KATAS | KatasActionTypes.FETCH_NEXT_KATAS;
}

interface FetchKatasSuccess {
  type: KatasActionTypes.FETCH_KATAS_SUCCESS;
  payload: {
    katasByID: KatasById;
    katas: KataInterface[];
    totalCount: number;
    filters: string;
  };
}

interface FetchKatasError {
  type: KatasActionTypes.FETCH_KATAS_ERROR;
  payload: {
    error: string;
  };
}

interface FetchNextKatas {
  type: KatasActionTypes.FETCH_NEXT_KATAS_SUCCESS;
  payload: {
    katasByID: KatasById;
    katas: KataInterface[];
    page: number;
  };
}

interface FetchStarredKatas {
  type: KatasActionTypes.ADD_STARRED_KATA;
  payload: {
    starredKatasList: KataInterface[];
  };
}

interface FetchRandomKatas {
  type: KatasActionTypes.SET_RANDOM_KATAS;
  payload: {
    randomKatas: KataInterface[] | null;
  };
}

export type KatasAction =
  | FetchKatas
  | FetchKatasSuccess
  | FetchKatasError
  | FetchNextKatas
  | FetchStarredKatas
  | FetchRandomKatas;

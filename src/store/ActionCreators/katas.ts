import { Dispatch } from 'redux';
import { KataAPI } from '../../api';
import { ThunkActionType } from '../../types';
import { KataInterface, KatasAction, KatasActionTypes, KatasById } from '../../types/kata';

export function fetchKatas(): ThunkActionType {
  return async (dispatch: Dispatch<KatasAction>, getState) => {
    const { query } = getState().filters;
    try {
      dispatch({ type: KatasActionTypes.FETCH_KATAS });
      const { rows, count } = await KataAPI.getAll(1, query);
      const katasByID: KatasById = {};

      rows.forEach((el) => {
        katasByID[el.id] = el;
      });
      dispatch({
        type: KatasActionTypes.FETCH_KATAS_SUCCESS,
        payload: { katasByID, katas: rows, totalCount: count, filters: query },
      });
    } catch (err) {
      dispatch({ type: KatasActionTypes.FETCH_KATAS_ERROR, payload: { error: 'Error' } });
    }
  };
}

export function fetchNextKatas(): ThunkActionType {
  return async (dispatch: Dispatch<KatasAction>, getState) => {
    const { page, katas, katasByID, totalCount, filters } = getState().katas;
    if (page > totalCount / 10) return;
    const nextPage = page + 1;
    try {
      dispatch({ type: KatasActionTypes.FETCH_NEXT_KATAS });
      const { rows } = await KataAPI.getAll(nextPage, filters);
      const katasById: KatasById = {};

      rows.forEach((el) => {
        katasById[el.id] = el;
      });
      dispatch({
        type: KatasActionTypes.FETCH_NEXT_KATAS_SUCCESS,
        payload: {
          katasByID: { ...katasByID, ...katasById },
          katas: [...katas, ...rows],
          page: nextPage,
        },
      });
    } catch (err) {
      dispatch({ type: KatasActionTypes.FETCH_KATAS_ERROR, payload: { error: 'Error' } });
    }
  };
}

export function addStarredKata(kata: KataInterface): ThunkActionType {
  return async (dispatch: Dispatch<KatasAction>, getState) => {
    const { starredKatasList } = getState().katas;
    dispatch({
      type: KatasActionTypes.ADD_STARRED_KATA,
      payload: {
        starredKatasList: [...starredKatasList, kata],
      },
    });
  };
}

export function setRandomKatas(reset?: string): ThunkActionType {
  return async (dispatch: Dispatch<KatasAction>) => {
    if (reset) {
      dispatch({
        type: KatasActionTypes.SET_RANDOM_KATAS,
        payload: { randomKatas: null },
      });
      return;
    }
    dispatch({ type: KatasActionTypes.FETCH_KATAS });
    const randomKatas = await KataAPI.getRandom(30);
    dispatch({ type: KatasActionTypes.SET_RANDOM_KATAS, payload: { randomKatas } });
  };
}

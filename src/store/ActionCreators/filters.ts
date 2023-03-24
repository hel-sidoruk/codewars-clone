import { Dispatch } from 'react';
import { ThunkActionType } from '../../types';
import { FiltersAction, FiltersActionTypes } from '../../types/filters';

export function changeFilters(ftype: string, fvalue: string): ThunkActionType {
  return (dispatch: Dispatch<FiltersAction>, getState) => {
    const { query } = getState().filters;
    if (!query) {
      dispatch({
        type: FiltersActionTypes.SET_FILTERS,
        payload: { query: fvalue ? `${ftype}=${fvalue}` : '' },
      });
      return;
    }
    const queries = query
      .split('&')
      .filter(Boolean)
      .filter((item) => !item.includes(ftype))
      .join('&');
    const newQuery = fvalue ? `${ftype}=${fvalue}&${queries}` : queries;
    dispatch({ type: FiltersActionTypes.SET_FILTERS, payload: { query: newQuery } });
  };
}

export function resetFilters(): ThunkActionType {
  return (dispatch: Dispatch<FiltersAction>) => {
    dispatch({
      type: FiltersActionTypes.RESET_FILTERS,
      payload: { query: '', features: [] },
    });
  };
}

export function addFeatureTags(tags: string[]): ThunkActionType {
  return (dispatch: Dispatch<FiltersAction>) => {
    dispatch({
      type: FiltersActionTypes.ADD_FEATURE_TAGS,
      payload: { features: tags },
    });
  };
}

export interface FiltersState {
  query: string;
  features: string[];
}

export enum FiltersActionTypes {
  SET_FILTERS = 'SET_FILTERS',
  RESET_FILTERS = 'RESET_FILTERS',
  ADD_FEATURE_TAGS = 'ADD_FEATURE_TAGS',
}

interface SetFilters {
  type: FiltersActionTypes.SET_FILTERS;
  payload: { query: string };
}

interface ResetFilters {
  type: FiltersActionTypes.RESET_FILTERS;
  payload: { query: string; features: string[] };
}

interface AddFeatureTag {
  type: FiltersActionTypes.ADD_FEATURE_TAGS;
  payload: { features: string[] };
}

export type FiltersAction = SetFilters | ResetFilters | AddFeatureTag;

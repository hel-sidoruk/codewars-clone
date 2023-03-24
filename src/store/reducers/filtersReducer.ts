import { FiltersState, FiltersActionTypes, FiltersAction } from '../../types/filters';

const initialState: FiltersState = {
  query: '',
  features: [],
};

export default function filtersReducer(state = initialState, action: FiltersAction) {
  switch (action.type) {
    case FiltersActionTypes.SET_FILTERS:
      return { ...state, query: action.payload.query };
    case FiltersActionTypes.RESET_FILTERS:
      return { ...state, query: action.payload.query, features: action.payload.features };
    case FiltersActionTypes.ADD_FEATURE_TAGS:
      return { ...state, features: action.payload.features };
    default:
      return state;
  }
}

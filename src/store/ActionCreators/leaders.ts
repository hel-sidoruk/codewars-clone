import { Dispatch } from 'redux';
import { UsersAPI } from '../../api';
import { ThunkActionType } from '../../types';
import { LeaderAction, LeadersActionTypes } from '../../types/leader';

export function fetchLeaders(): ThunkActionType {
  return async (dispatch: Dispatch<LeaderAction>) => {
    try {
      dispatch({ type: LeadersActionTypes.FETCH_LEADERS });
      const users = await UsersAPI.getAll();
      console.log(users);
      dispatch({
        type: LeadersActionTypes.FETCH_LEADERS_SUCCESS,
        payload: {
          users: users,
        },
      });
    } catch (err) {
      dispatch({ type: LeadersActionTypes.FETCH_LEADERS_ERROR, payload: { error: 'Error' } });
    }
  };
}

import { ActionCreator, Dispatch } from 'redux';
import { UsersAPI } from '../../api';
import { AccountAPI } from '../../api/AccountAPI';
import { ThunkActionType } from '../../types';
import { AccountAction, AccountActionTypes, AccountInfo } from '../../types/account';

export function setAccount(): ThunkActionType {
  return async (dispatch: Dispatch<AccountAction>) => {
    try {
      const account = await AccountAPI.getInfo();
      const { username, trainedKatas, solvedKatas, starredKatas, forfeitedKatas } = account;
      const { rank, honor, score, avatar, clan, name } = await UsersAPI.getOne(username);
      dispatch({
        type: AccountActionTypes.SET_ACCOUNT,
        payload: {
          username,
          avatar,
          trainedKatas,
          solvedKatas,
          starredKatas,
          rank,
          honor,
          score,
          forfeitedKatas,
          clan,
          name,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function editAccountInfo(info: AccountInfo): ThunkActionType {
  return async (dispatch: Dispatch<AccountAction>) => {
    const { username, clan, name, avatar } = info;
    dispatch({
      type: AccountActionTypes.EDIT_INFO,
      payload: avatar ? { username, clan, name, avatar } : { username, clan, name },
    });
  };
}

export function markAsTrained(kataId: string): ThunkActionType {
  return async (dispatch: Dispatch<AccountAction>, getState) => {
    try {
      const { trainedKatas } = getState().account;
      await AccountAPI.addTrainedKata(kataId);
      if (trainedKatas && !trainedKatas.includes(kataId)) {
        dispatch({
          type: AccountActionTypes.MARK_AS_TRAINED,
          payload: { trainedKatas: [...trainedKatas, kataId] },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
}

export function markAsSolved(kataId: string): ThunkActionType {
  return async (dispatch: Dispatch<AccountAction>, getState) => {
    try {
      const { solvedKatas, trainedKatas } = getState().account;
      await AccountAPI.addSolvedKata(kataId);
      if (solvedKatas && trainedKatas) {
        dispatch({
          type: AccountActionTypes.MARK_AS_SOLVED,
          payload: {
            solvedKatas: [...solvedKatas, kataId],
            trainedKatas: trainedKatas.filter((id) => id !== kataId),
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
}

export function addToStarred(kataId: string, stars: number): ThunkActionType {
  return async (dispatch: Dispatch<AccountAction>, getState) => {
    const { starredKatas } = getState().account;
    try {
      await AccountAPI.addStarredKata(kataId, stars);
      if (starredKatas) {
        if (!starredKatas.includes(kataId))
          dispatch({
            type: AccountActionTypes.ADD_TO_STARRED,
            payload: {
              starredKatas: [...starredKatas, kataId],
            },
          });
        else
          dispatch({
            type: AccountActionTypes.ADD_TO_STARRED,
            payload: {
              starredKatas: starredKatas.filter((id) => id !== kataId),
            },
          });
      }
    } catch (error) {
      console.log(error);
    }
  };
}

export function addToForfeited(kataId: string): ThunkActionType {
  return async (dispatch: Dispatch<AccountAction>, getState) => {
    const { forfeitedKatas } = getState().account;
    if (forfeitedKatas?.includes(kataId)) return;
    try {
      await AccountAPI.addForfeitedKata(kataId);

      if (forfeitedKatas) {
        dispatch({
          type: AccountActionTypes.ADD_TO_FORFEITED,
          payload: {
            forfeitedKatas: [...forfeitedKatas, kataId],
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
}

export function updateUserProgress(
  score: number,
  honor: number,
  newRank?: string
): ThunkActionType {
  return async (dispatch: Dispatch<AccountAction>, getState) => {
    const { username, rank } = getState().account;
    try {
      if (username && rank) {
        const { totalCompleted } = await UsersAPI.getOne(username);
        const count = totalCompleted + 1;
        const updates = newRank
          ? {
              totalCompleted: count,
              rank: newRank,
              honor,
              score,
            }
          : { totalCompleted: count, honor, score };
        await UsersAPI.update(username, updates);
        dispatch({
          type: AccountActionTypes.UPDATE_USER_PROGRESS,
          payload: { rank: newRank ? newRank : rank, honor, score },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
}

export const signOutAccount: ActionCreator<AccountAction> = () => ({
  type: AccountActionTypes.SIGN_OUT_ACCOUNT,
});

import { nanoid } from 'nanoid';
import { Dispatch } from 'redux';
import { NotificationsAPI } from '../../api/NotificationsAPI';
import { ThunkActionType } from '../../types';
import { NotificationsAction, NotificationsActionTypes } from '../../types/notifications';

export function fetchNotifications(): ThunkActionType {
  return async (dispatch: Dispatch<NotificationsAction>) => {
    try {
      const notifications = await NotificationsAPI.getAll();
      dispatch({
        type: NotificationsActionTypes.FETCH_NOTIFICATIONS,
        payload: { notifications },
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function removeFromNew(id: string): ThunkActionType {
  return (dispatch: Dispatch<NotificationsAction>, getState) => {
    const { newItems } = getState().notifications;
    dispatch({
      type: NotificationsActionTypes.REMOVE_FROM_NEW,
      payload: { newItems: newItems.filter((note) => note.id !== id) },
    });
  };
}

export function addNotification(text: string, title: string): ThunkActionType {
  return async (dispatch: Dispatch<NotificationsAction>, getState) => {
    try {
      const { notifications, newItems } = getState().notifications;
      dispatch({
        type: NotificationsActionTypes.ADD_NEW_NOTIFICATION,
        payload: { newItems: [...newItems, { id: nanoid(), text, title }] },
      });
      const notification = await NotificationsAPI.create(text);
      dispatch({
        type: NotificationsActionTypes.ADD_NOTIFICATION,
        payload: {
          notifications: [...notifications, notification],
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function deleteNotification(id: string): ThunkActionType {
  return async (dispatch: Dispatch<NotificationsAction>, getState) => {
    try {
      const { notifications } = getState().notifications;
      await NotificationsAPI.delete(id);
      dispatch({
        type: NotificationsActionTypes.DELETE_NOTIFICATION,
        payload: { notifications: notifications.filter((note) => note.id !== id) },
      });
    } catch (error) {
      console.log(error);
    }
  };
}

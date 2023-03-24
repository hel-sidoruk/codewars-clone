import {
  NotificationsAction,
  NotificationsActionTypes,
  NotificationsState,
} from '../../types/notifications';

const initialState: NotificationsState = {
  notifications: [],
  newItems: [],
};

export const notificationsReducer = (
  state = initialState,
  action: NotificationsAction
): NotificationsState => {
  switch (action.type) {
    case NotificationsActionTypes.FETCH_NOTIFICATIONS:
      return { ...state, notifications: action.payload.notifications };
    case NotificationsActionTypes.ADD_NOTIFICATION:
      return {
        ...state,
        notifications: action.payload.notifications,
      };
    case NotificationsActionTypes.ADD_NEW_NOTIFICATION:
      return {
        ...state,
        newItems: action.payload.newItems,
      };
    case NotificationsActionTypes.REMOVE_FROM_NEW:
      return { ...state, newItems: action.payload.newItems };
    case NotificationsActionTypes.DELETE_NOTIFICATION:
      return { ...state, notifications: action.payload.notifications };
    default:
      return state;
  }
};

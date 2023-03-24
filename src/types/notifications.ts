export interface NotificationInterface {
  id: string;
  username: string;
  text: string;
  createdAt: string;
}

export interface NotificationsState {
  notifications: NotificationInterface[];
  newItems: { id: string; text: string; title: string }[];
}

export enum NotificationsActionTypes {
  FETCH_NOTIFICATIONS = 'FETCH_NOTIFICATIONS',
  ADD_NOTIFICATION = 'ADD_NOTIFICATION',
  ADD_NEW_NOTIFICATION = 'ADD_NEW_NOTIFICATION',
  REMOVE_FROM_NEW = 'REMOVE_FROM_NEW',
  DELETE_NOTIFICATION = 'DELETE_NOTIFICATION',
}

interface FetchNotifications {
  type: NotificationsActionTypes.FETCH_NOTIFICATIONS;
  payload: {
    notifications: NotificationInterface[];
  };
}

interface RemoveFromNew {
  type: NotificationsActionTypes.REMOVE_FROM_NEW;
  payload: {
    newItems: { id: string; text: string; title: string }[];
  };
}
interface AddNewNotification {
  type: NotificationsActionTypes.ADD_NEW_NOTIFICATION;
  payload: {
    newItems: { id: string; text: string; title: string }[];
  };
}
interface AddNotification {
  type: NotificationsActionTypes.ADD_NOTIFICATION;
  payload: {
    notifications: NotificationInterface[];
  };
}

interface DeleteNotification {
  type: NotificationsActionTypes.DELETE_NOTIFICATION;
  payload: {
    notifications: NotificationInterface[];
  };
}

export type NotificationsAction =
  | FetchNotifications
  | RemoveFromNew
  | AddNotification
  | AddNewNotification
  | DeleteNotification;

import { combineReducers } from 'redux';
import accountReducer from './accountReducer';
import authUserReducer from './authUserReducer';
import { commentsReducer } from './commentsReducer';
import kataReducer from './kataReducer';
import leaderReducer from './leadersReducer';
import { notificationsReducer } from './notificationsReducer';
import { solutionReducer } from './solutionReducer';
import filtersReducer from './filtersReducer';
import { userReducer } from './userReducer';

export const rootReducer = combineReducers({
  katas: kataReducer,
  authorizedUser: authUserReducer,
  solution: solutionReducer,
  leaders: leaderReducer,
  account: accountReducer,
  filters: filtersReducer,
  notifications: notificationsReducer,
  comments: commentsReducer,
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

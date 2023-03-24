import { CommentsAction, CommentsActionTypes, CommentsState } from '../../types/comments';

const initialState: CommentsState = {
  comments: [],
  loading: false,
  updatingComment: null,
  totalCount: 0,
};

export const commentsReducer = (state = initialState, action: CommentsAction): CommentsState => {
  switch (action.type) {
    case CommentsActionTypes.LOADING_COMMENTS:
      return { ...state, loading: true };
    case CommentsActionTypes.FETCH_COMMENTS:
      return {
        ...state,
        comments: action.payload.comments,
        loading: false,
        totalCount: action.payload.totalCount,
      };
    case CommentsActionTypes.ADD_COMMENT:
      return { ...state, comments: action.payload.comments, totalCount: action.payload.totalCount };
    case CommentsActionTypes.DELETE_COMMENT:
      return { ...state, comments: action.payload.comments, totalCount: action.payload.totalCount };
    case CommentsActionTypes.UPDATE_COMMENT_TEXT:
      return { ...state, comments: action.payload.comments };
    case CommentsActionTypes.SET_UPDATING_COMMENT:
      return { ...state, updatingComment: action.payload.updatingComment };
    default:
      return state;
  }
};

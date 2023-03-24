export type CommentLabel = 'Question' | 'Suggestion' | 'Issue';

export interface CommentInterface {
  id: number;
  avatar: string;
  kataId: string;
  username: string;
  text: string;
  rank: string;
  votes: number;
  createdAt: string;
  spoiler: boolean;
  label: CommentLabel | null;
}

export interface CommentsState {
  comments: CommentInterface[];
  updatingComment: CommentInterface | null;
  loading: boolean;
  totalCount: number;
}

export enum CommentsActionTypes {
  LOADING_COMMENTS = 'LOADING_COMMENTS',
  FETCH_COMMENTS = 'FETCH_COMMENTS',
  ADD_COMMENT = 'ADD_COMMENT',
  DELETE_COMMENT = 'DELETE_COMMENT',
  SET_UPDATING_COMMENT = 'SET_UPDATING_COMMENT',
  UPDATE_COMMENT_TEXT = 'UPDATE_COMMENT_TEXT',
}
interface LoadingComments {
  type: CommentsActionTypes.LOADING_COMMENTS;
}

interface CommentsActions {
  type:
    | CommentsActionTypes.FETCH_COMMENTS
    | CommentsActionTypes.ADD_COMMENT
    | CommentsActionTypes.DELETE_COMMENT;
  payload: {
    comments: CommentInterface[];
    totalCount: number;
  };
}
interface UpdateComment {
  type: CommentsActionTypes.UPDATE_COMMENT_TEXT;
  payload: {
    comments: CommentInterface[];
  };
}
interface UpdateCommentText {
  type: CommentsActionTypes.SET_UPDATING_COMMENT;
  payload: {
    updatingComment: CommentInterface | null;
  };
}
export type CommentsAction = LoadingComments | CommentsActions | UpdateCommentText | UpdateComment;

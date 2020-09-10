import {HideLoader, ShowLoader} from "./loaderTypes";
import {HideUndoButton, ShowUndoButton} from "store/types/undoButtonTypes";
import {
  PostsFetchRequest,
  RemovePost,
  SetFavoriteStatus,
  SetRandomPost,
  SetReorderedPosts
} from "store/types/postTypes";


export type ActionTypes =
  | PostsFetchRequest
  | SetRandomPost
  | RemovePost
  | ShowLoader
  | HideLoader
  | ShowUndoButton
  | HideUndoButton
  | SetFavoriteStatus
  | SetReorderedPosts;

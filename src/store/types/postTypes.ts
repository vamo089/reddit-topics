import { PostsListType } from "components/postsList/PostsListContainer";

export const POSTS_FETCH_REQUESTED = "THREADS_FETCH_REQUESTED";
export const SET_RANDOM_POST = "SET_RANDOM_POST";
export const REMOVE_POST = "REMOVE_POST";
export const SET_REORDERED_POSTS = "SET_REORDERED_POSTS";
export const SET_FAVORITE_STATUS = "SET_FAVORITE_STATUS";

export interface SetRandomPost {
  type: typeof SET_RANDOM_POST;
  randomPost: PostsListType;
}
export interface RemovePost {
  type: typeof REMOVE_POST;
  index: number;
}

export interface PostsFetchRequest {
  type: typeof POSTS_FETCH_REQUESTED;
  topic: string;
}

export interface SetFavoriteStatus {
  type: typeof SET_FAVORITE_STATUS;
  index: number;
}
export interface SetReorderedPosts {
  type: typeof SET_REORDERED_POSTS;
  posts: PostsListType[];
}

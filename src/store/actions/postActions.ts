import {PostsListType} from "components/postsList/PostsListContainer";
import {REMOVE_POST, SET_FAVORITE_STATUS, SET_REORDERED_POSTS} from "store/types/postTypes";
import {ActionTypes} from "store/types";

export const removePost = (index: number): ActionTypes => {
  return {
    type: REMOVE_POST,
    index,
  };
};
export const setFavoriteStatus = (index: number): ActionTypes => {
  return {
    type: SET_FAVORITE_STATUS,
    index,
  };
};

export const setReorderedPosts = (posts: PostsListType[]): ActionTypes => {
  return {
    type: SET_REORDERED_POSTS,
    posts,
  };
};
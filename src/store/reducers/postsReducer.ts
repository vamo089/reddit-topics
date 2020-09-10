import { PostsListType } from "components/postsList/PostsListContainer";
import { ActionTypes } from "store/types";
import {
  REMOVE_POST,
  SET_FAVORITE_STATUS,
  SET_RANDOM_POST,
  SET_REORDERED_POSTS,
} from "store/types/postTypes";

interface RootState {
  topicList: string[];
  posts: PostsListType[];
}

export const initialState: RootState = {
  topicList: ["Frontend", "ReactJS", "VueJS", "Angular"],
  posts: [],
};

export const postsReducer = (
  state = initialState,
  action: ActionTypes
): RootState => {
  switch (action.type) {
    case SET_RANDOM_POST: {
      const posts = [...state.posts, action.randomPost];
      return { ...state, posts };
    }
    case REMOVE_POST: {
      const posts = [...state.posts];
      posts.splice(action.index, 1);
      return { ...state, posts };
    }
    case SET_FAVORITE_STATUS: {
      const posts = [...state.posts];
      posts[action.index].favorite = !posts[action.index].favorite;
      return { ...state, posts };
    }
    case SET_REORDERED_POSTS: {
      const posts = action.posts;
      return { ...state, posts };
    }
    default:
      return state;
  }
};

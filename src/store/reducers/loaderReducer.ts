import { HIDE_LOADER, SHOW_LOADER } from "store/types/loaderTypes";
import { ActionTypes } from "store/types";

export interface LoaderReducerRootState {
  loaderIsShown: boolean;
}

const initialState: LoaderReducerRootState = {
  loaderIsShown: false,
};

export const loaderReducer = (
  state = initialState,
  action: ActionTypes
): LoaderReducerRootState => {
  switch (action.type) {
    case SHOW_LOADER: {
      return { ...state, loaderIsShown: true };
    }
    case HIDE_LOADER: {
      return { ...state, loaderIsShown: false };
    }
    default:
      return state;
  }
};

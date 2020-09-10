import { ActionTypes } from "store/types";
import {
  HIDE_UNDO_BUTTON,
  SHOW_UNDO_BUTTON,
} from "store/types/undoButtonTypes";

export interface LoaderReducerRootState {
  undoButtonIsShown: boolean;
}

const initialState: LoaderReducerRootState = {
  undoButtonIsShown: false,
};

export const undoButtonReducer = (
  state = initialState,
  action: ActionTypes
): LoaderReducerRootState => {
  switch (action.type) {
    case SHOW_UNDO_BUTTON: {
      return { ...state, undoButtonIsShown: true };
    }
    case HIDE_UNDO_BUTTON: {
      return { ...state, undoButtonIsShown: false };
    }
    default:
      return state;
  }
};

import {HIDE_UNDO_BUTTON, SHOW_UNDO_BUTTON} from "store/types/undoButtonTypes";
import {ActionTypes} from "store/types";

export const showUndoButton = (): ActionTypes => {
  return {
    type: SHOW_UNDO_BUTTON,
  };
};

export const hideUndoButton = (): ActionTypes => {
  return {
    type: HIDE_UNDO_BUTTON,
  };
};
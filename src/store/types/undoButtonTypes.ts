export const SHOW_UNDO_BUTTON = "SHOW_UNDO_BUTTON";
export const HIDE_UNDO_BUTTON = "HIDE_UNDO_BUTTON";

export interface ShowUndoButton {
  type: typeof SHOW_UNDO_BUTTON;
}

export interface HideUndoButton {
  type: typeof HIDE_UNDO_BUTTON;
}
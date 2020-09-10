export const SHOW_LOADER = "SHOW_LOADER";
export const HIDE_LOADER = "HIDE_LOADER";

export interface ShowLoader {
  type: typeof SHOW_LOADER;
}

export interface HideLoader {
  type: typeof HIDE_LOADER;
}
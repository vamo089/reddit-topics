import { ActionCreators } from "redux-undo";
import React from "react";
import { useDispatch } from "react-redux";
import { hideUndoButton } from "store/actions/undoButton";

export const UNDO_BUTTON_LIVE_TIME = 2000;

export const UndoButton = () => {
  const dispatch = useDispatch();
  const [counter, setCounter] = React.useState(
    Number(UNDO_BUTTON_LIVE_TIME.toString().slice(0, 1))
  );
  React.useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  return (
    <>
      <button
        onClick={() => {
          dispatch(ActionCreators.undo());
          dispatch(hideUndoButton());
        }}
      >
        UNDO ({counter})
      </button>
    </>
  );
};

import { Store, createStore, applyMiddleware, combineReducers } from "redux";
import undoable, { includeAction } from "redux-undo";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "sagas";
import { postsReducer } from "store/reducers/postsReducer";
import { loaderReducer } from "store/reducers/loaderReducer";
import { undoButtonReducer } from "./reducers/undoButtonReducer";
import {REMOVE_POST, SET_RANDOM_POST, SET_REORDERED_POSTS} from "store/types/postTypes";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  undo: undoButtonReducer,
  loader: loaderReducer,
  root: undoable(postsReducer, {
    filter: includeAction([SET_RANDOM_POST, REMOVE_POST, SET_REORDERED_POSTS]),
  }),
});

export const store: Store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);
export type RootState = ReturnType<typeof rootReducer>;
export default store;

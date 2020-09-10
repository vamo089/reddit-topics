import { UNDO_BUTTON_LIVE_TIME } from "components/UndoButton";
import { call, delay, put, takeEvery, takeLatest } from "redux-saga/effects";
import { fetchPostsApi } from "services/fetchPostsApi";
import {POSTS_FETCH_REQUESTED, SET_RANDOM_POST} from "store/types/postTypes";
import {HIDE_LOADER, SHOW_LOADER} from "store/types/loaderTypes";
import {HIDE_UNDO_BUTTON, SHOW_UNDO_BUTTON} from "store/types/undoButtonTypes";

function* fetchPosts({ item }: { item: string; type: string }) {
  yield put({ type: SHOW_LOADER });
  const posts = yield call(fetchPostsApi, item);
  const randomPost = posts[Math.floor(Math.random() * posts.length)];
  yield put({ type: SET_RANDOM_POST, randomPost });
  yield put({ type: HIDE_LOADER });
}

function* undoButton() {
  yield delay(UNDO_BUTTON_LIVE_TIME);
  yield put({ type: HIDE_UNDO_BUTTON });
}


export function* rootSaga() {
  yield takeEvery(POSTS_FETCH_REQUESTED, fetchPosts);
  yield takeLatest(SHOW_UNDO_BUTTON, undoButton);
}

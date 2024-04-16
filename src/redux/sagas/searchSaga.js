import { call, put, takeLatest, delay } from "redux-saga/effects";
import fruitsAPI from "../../api/FruitsAPI";
import {
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_FAILURE,
} from "../actions/searchActions";

// Saga Worker
function* fetchSearchResults(action) {
  try {
    yield delay(500); // agar fruitsAPI.searchFruits terpanggil hanya 1 kali
    const results = yield call(fruitsAPI.searchFruits, action.payload);
    yield put({
      type: SEARCH_SUCCESS,
      payload: results,
    });
  } catch (e) {
    yield put({
      type: SEARCH_FAILURE,
      payload: e,
    });
  }
}

// Saga Watcher
// Saga ini 'mengawasi' setiap aksi SEARCH_REQUEST
// ketika ada action SEARCH_REQUEST yang di trigger atau dispatch
// maka akan menjalankan/mentrigger fungsi fetchSearchResult
function* searchSaga() {
  yield takeLatest(SEARCH_REQUEST, fetchSearchResults);
}

export default searchSaga;

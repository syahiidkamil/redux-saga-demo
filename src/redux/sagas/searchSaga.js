import { call, put, takeLatest } from "redux-saga/effects";
import fruitsAPI from "../../api/FruitsAPI";
import {
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_FAILURE,
} from "../actions/searchActions";

function* fetchSearchResults(action) {
  try {
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

function* searchSaga() {
  yield takeLatest(SEARCH_REQUEST, fetchSearchResults);
}

export default searchSaga;

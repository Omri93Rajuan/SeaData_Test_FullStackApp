// sagas.js
import {
  call,
  put,
  takeEvery
} from "redux-saga/effects";
import {
  getUsersSuccess,
  getUsersFailure
} from "./reducers";
import axios from "axios";

function* workGetUsersFetch() {
  try {
    const response = yield call(() => axios.get("http://localhost:8181/data"));
    yield put(getUsersSuccess(response.data));
  } catch (error) {
    yield put(getUsersFailure());
  }
}

function* workAddUser(action) {
  try {
    const response = yield call(() => axios.post("http://localhost:8181/data/addUser", action.payload));
    yield put(getUsersSuccess(response.data));
  } catch (error) {
    yield put(getUsersFailure());
  }
}

function* workDeleteUser(action) {
  try {
    const response = yield call(() => axios.delete(`http://localhost:8181/data/${action.payload}`));
    yield put(getUsersSuccess(response.data));
  } catch (error) {
    yield put(getUsersFailure());
  }
}

function* userSaga() {
  yield takeEvery("users/getUsersFetch", workGetUsersFetch);
  yield takeEvery("users/addUserFetch", workAddUser);
  yield takeEvery("users/deleteUser", workDeleteUser);
}

export default userSaga;
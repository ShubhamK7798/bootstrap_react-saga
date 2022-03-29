import axios from "axios";
import { takeLatest, takeEvery, call, put } from "redux-saga/effects";
import { handleGetUsers } from "../api";
import { setUsers } from "../users/userAction";
import { GET_USERS,  } from "../users/userTypes";

export function* getUsersSagaWatcher() {
  yield takeLatest(GET_USERS, fetchUsers);
  // yield takeEvery(POST_USER_DATA, postUsers);
}



export function* fetchUsers() {
  try {
    const res = yield call(handleGetUsers);
    const data = res.data;
    yield put(setUsers(data));
  } catch (error) {
  }
}


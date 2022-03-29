import axios from "axios";
import { call, takeLatest } from "redux-saga/effects";
import { handlePostUsers } from "../api";
import { POST_USER_DATA } from "../users/userTypes";

export function* postUserSagaWatcher(){
    yield takeLatest(POST_USER_DATA,postUsers)
}


export function* postUsers(dispatch) {
  try {
    yield call(handlePostUsers,dispatch.userdata);
  } catch (error) {
    console.log(error.message);
  }
}

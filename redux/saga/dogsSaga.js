import { takeLatest, put,call } from "redux-saga/effects";
import { fetchRandomDogs } from "../api";
import { setRandomDogs } from "../dogs/dogsAction";
import { GET_RANDOM_DOGS } from "../dogs/dogsType";

export function* watchDogsAction() {
  yield takeLatest(GET_RANDOM_DOGS, getRandomDogs);
}

export function* getRandomDogs() {
  try {
    console.log('inside')
    const res = yield call(fetchRandomDogs);
    yield put(setRandomDogs(res.data.message));
    
  } catch (error) {
    console.log(error.message)
    
  }
}

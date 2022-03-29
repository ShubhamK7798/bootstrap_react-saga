
import {all} from 'redux-saga/effects'
import { watchDogsAction } from './dogsSaga'
import { getUsersSagaWatcher } from './getUsersSaga'
import { postUserSagaWatcher } from './postUserSaga'
export function* rootSaga(){
    yield all([getUsersSagaWatcher(),postUserSagaWatcher(),watchDogsAction()])
}
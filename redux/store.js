import { applyMiddleware, combineReducers, createStore } from "redux";
import { counterReducer } from "./Counter/counterReducer";
import { userReducer } from "./users/userReducer";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./saga/rootSaga";
import { dogsReducer } from "./dogs/dogsReducer";

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
  counter: counterReducer,
  users: userReducer,
  dogs:dogsReducer
});

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

import { combineReducers } from "redux";
import auth from "./auth/auth";
import {check, checkSaga} from './check/check';
import { list, listSaga } from './list/list';
import external from './external/external';
import myinfo from './myinfo/myInfo';
import loading from './loading';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
  auth,
  external,
  check,
  list,
  myinfo,
  loading,
});

export function* rootSaga() {
  yield all([checkSaga(), listSaga()]);
}

export default rootReducer;

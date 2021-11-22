import { combineReducers } from 'redux';
import { all } from '@redux-saga/core/effects';
import auth, {authSaga} from './auth/auth';
import user, {userSaga} from './auth/user';
import loading from './loading';
import {check} from './check/check';
import {external} from './external/external';
import {myinfo} from './myinfo/myInfo'

// import list from './list/index';

export default rootReducer = combineReducers({
  auth,
  loading,
  user,
  external,
  check,
  myinfo,
});

export function* rootSaga(){
  yield all([authSaga(), userSaga()]);
}
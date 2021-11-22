import { combineReducers } from 'redux';
// // import { all } from 'redux-saga/effects';
// // import auth, { authSaga } from './auth/index';
import {check} from './check/check';
import {external} from './external/external';
import {myinfo} from './myinfo/myInfo'
// import list from './list/index';

export default rootReducer = combineReducers({
  external,
  check,
  myinfo,
});

// // export function* rootSaga() {
// //   yield all([authSaga(), userSaga(), writeSaga(), postSaga(), postsSaga()]);
// // }
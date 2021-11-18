import { combineReducers } from 'redux';
// // import { all } from 'redux-saga/effects';
// // import auth, { authSaga } from './auth/index';
import {check} from './check/check';
import {external} from './external/external';
// import list from './list/index';
// import myInfo from './myinfo/index';

// // const rootReducer = combineReducers({
// //   auth,
// //   check,
// //   external,
// //   list,
// //   myInfo,
// // });
export const rootReducer = combineReducers({
    external,
    check,
  });
// // export function* rootSaga() {
// //   yield all([authSaga(), userSaga(), writeSaga(), postSaga(), postsSaga()]);
// // }

import { combineReducers } from 'redux';
// import { all } from 'redux-saga/effects';
// import auth, { authSaga } from './auth/index';
// import check from './check/index';
import external from './external/external';

// import list from './list/index';
import myInfo from './myInfo/index';

// const rootReducer = combineReducers({
//   auth,
//   check,
//   external,
//   list,
//   myInfo,
// });
export default rootReducer = combineReducers({
    external,
    myInfo
  });
// export function* rootSaga() {
//   yield all([authSaga(), userSaga(), writeSaga(), postSaga(), postsSaga()]);
// }
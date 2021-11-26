import { combineReducers } from "redux";
import classes from "./class/course";
// import { all } from '@redux-saga/core/effects';
// import auth, {authSaga} from './auth/auth';
// import user, {userSaga} from './auth/user';
// import loading from './loading';
// import check from './check/check';
// import external from './external/external';
// import myinfo from './myinfo/myInfo'
// import class from './class/index';
// import list from './list/index';

const rootReducer = combineReducers({
  classes,
});

// export function* rootSaga(){
//   yield all([authSaga(), userSaga()]);
// }

export default rootReducer;

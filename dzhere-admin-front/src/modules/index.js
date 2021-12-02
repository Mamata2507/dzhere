import { combineReducers } from "redux";
import auth from "./auth/auth";
import loading from './loading';
import student from './student/student'
import classes from './class/course';
import teacherWeb from './user/teacherWeb';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
  auth,
  student,
  loading,
  teacherWeb,
  classes
});

// export function* rootSaga() {
//   yield all();
// }

export default rootReducer;

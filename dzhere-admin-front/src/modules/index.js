import { combineReducers } from "redux";
import auth from "./auth/auth";
import loading from './loading';
import student from './student/student'
import classes from './class/course';
import teacher from './teacher/teacher';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
  auth,
  student,
  loading,
  teacher,
  classes
});

// export function* rootSaga() {
//   yield all();
// }

export default rootReducer;

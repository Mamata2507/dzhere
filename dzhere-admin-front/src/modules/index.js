import { combineReducers } from "redux";
import auth from "./auth/auth";
import loading from "./loading";
import list from './user/list'
import studentCount from "./user/studentCount";
import teacher, { teacherSaga } from "./user/teacherClassAttend";
import { all } from "redux-saga/effects";
import studentAttend, { studentSaga } from "./user/studentClassAttend";
import { studentCountSaga } from "./user/studentCount";
import classes from './class/course';
import yj_attend from './user/yj_attend'

const rootReducer = combineReducers({
  yj_attend,
  auth,
  list,
  studentCount,
  teacher,
  studentAttend,
  loading,
  classes
});

export function* rootSaga() {
  yield all([teacherSaga(), studentSaga(), studentCountSaga()]);
}

export default rootReducer;

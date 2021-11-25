import { combineReducers } from 'redux';
import student from './admin/student/student'
import loading from './admin/student/loading'

const rootReducer = combineReducers({
  student,
  loading,
});

export default rootReducer;
import { combineReducers } from 'redux';
import auth, {authSaga} from './client/auth/auth';
import user, {userSaga} from './client/auth/user';
import loading from './loading';
import { all } from '@redux-saga/core/effects';

const rootReducer = combineReducers({
  auth,
  loading,
  user,
});

export function* rootSaga(){
  yield all([authSaga(), userSaga()]);
}

export default rootReducer;
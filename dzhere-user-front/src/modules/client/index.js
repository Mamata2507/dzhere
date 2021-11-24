import { combineReducers } from 'redux';
import loading from './loading';
import {check, checkSaga} from './check/check';
import {external} from './external/external';
import { all } from 'redux-saga/effects';
import { list, listSaga } from './list/list';

export const rootReducer = combineReducers({
    external,
    check,
    loading,
    list,
  });

export function* rootSaga() {
  yield all([checkSaga(), listSaga()]);
}

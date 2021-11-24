import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, {createRequestActionTypes} from '../../../lib/api/createRequestSaga';
import * as checkAPI from '../../../lib/api/check/check';

// Actions
// 출석
const [ATTEND_LIST_LOAD, ATTEND_LIST_LOAD_SUCCESS, ATTEND_LIST_LOAD_FAILURE] = createRequestActionTypes('attend/ATTEND_LIST_LOAD');

const initState = {
    userInfo : {
        u_phone: '',
        month: '',
    },
    attendList : null,
    error : null,
}

// Reducers
// 출석
export const attendListLoad = createAction(ATTEND_LIST_LOAD, (userInfo)=>userInfo);
// saga 생성
// 출석
const attendListLoadSaga = createRequestSaga(ATTEND_LIST_LOAD, checkAPI.loadAttendList);

export function* listSaga() {
    yield takeLatest(ATTEND_LIST_LOAD, attendListLoadSaga);
}

export const list = handleActions({
    [ATTEND_LIST_LOAD_SUCCESS]: (state, {payload:attendList}) => ({
        ...state,
        attendList: attendList,
    }),
    [ATTEND_LIST_LOAD_FAILURE]: (state, {payload:error}) => ({
        ...state,
        error: error,
    }), 
},initState);
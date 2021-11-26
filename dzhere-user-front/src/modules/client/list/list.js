import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, {createRequestActionTypes} from '../../../lib/api/createRequestSaga';
import * as checkAPI from '../../../lib/api/check/check';

// Actions
// 출석
const [ATTEND_CNT_LOAD, ATTEND_CNT_LOAD_SUCCESS, ATTEND_CNT_LOAD_FAILURE] = createRequestActionTypes('attend/ATTEND_CNT_LOAD');
const [ATTEND_LIST_LOAD, ATTEND_LIST_LOAD_SUCCESS, ATTEND_LIST_LOAD_FAILURE] = createRequestActionTypes('attend/ATTEND_LIST_LOAD');

const initState = {
    userInfo : {
        u_phone: '',
        month: '',
    },
    attendCnt : {},
    attendList : [],
    error : null,
}

// Reducers
// 출석
export const attendCntLoad = createAction(ATTEND_CNT_LOAD, (userInfo)=>userInfo);
export const attendListLoad = createAction(ATTEND_LIST_LOAD, (userInfo)=>userInfo);
// saga 생성
// 출석
const attendCntLoadSaga = createRequestSaga(ATTEND_CNT_LOAD, checkAPI.loadAttendCnt);
const attendListLoadSaga = createRequestSaga(ATTEND_LIST_LOAD, checkAPI.loadAttendList);

export function* listSaga() {
    yield takeLatest(ATTEND_CNT_LOAD, attendCntLoadSaga);
    yield takeLatest(ATTEND_LIST_LOAD, attendListLoadSaga);
}

export const list = handleActions({
    [ATTEND_CNT_LOAD_SUCCESS]: (state, {payload: attendCnt}) => ({
        ...state,
        attendCnt: attendCnt,
    }),
    [ATTEND_CNT_LOAD_FAILURE]: (state, {payload: error}) => ({
        ...state,
        error: error,
    }), 
    [ATTEND_LIST_LOAD_SUCCESS]: (state, {payload: attendCnt}) => ({
        ...state,
        attendList: attendCnt,
    }),
    [ATTEND_LIST_LOAD_FAILURE]: (state, {payload: error}) => ({
        ...state,
        error: error,
    }), 
},initState);
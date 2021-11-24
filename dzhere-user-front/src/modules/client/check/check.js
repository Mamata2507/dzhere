import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, {createRequestActionTypes} from '../../../lib/api/createRequestSaga';
import * as checkAPI from '../../../lib/api/check/check';

// Actions
// 수업
const [CLASS_LOAD, CLASS_LOAD_SUCCESS, CLASS_LOAD_FAILURE] = createRequestActionTypes('class/CLASS_LOAD');
const [CLASS_TIME_LOAD, CLASS_TIME_LOAD_SUCCESS, CLASS_TIME_LOAD_FAILURE] = createRequestActionTypes('class/CLASS_TIME_LOAD');

// 출석
const ATTEND_LOAD = 'check/ATTEND_LOAD';
const [ATTEND_INSERT, ATTEND_INSERT_SUCCESS, ATTEND_INSERT_DELETE] = createRequestActionTypes('check/ATTEND_INSERT');
const [ATTEND_EXIT_INSERT, ATTEND_EXIT_INSERT_SUCCESS, ATTEND_EXIT_INSERT_DELETE] = createRequestActionTypes('check/ATTEND_EXIT_INSERT');

// Reducers
// 수업
export const loadClassList = createAction(CLASS_LOAD, u_phone=>u_phone);
export const loadClassTimeList = createAction(CLASS_TIME_LOAD, u_phone=>u_phone);

// 출석
export const loadCheck = createAction(ATTEND_LOAD, u_phone=>u_phone);
export const checkInsert = createAction(ATTEND_INSERT, u_phone=>u_phone);
export const checkExitInsert = createAction(ATTEND_EXIT_INSERT, u_phone=>u_phone);

// saga 생성
// 수업
const classListSaga = createRequestSaga(CLASS_LOAD, checkAPI.loadClasses);
const classTimeListSaga = createRequestSaga(CLASS_TIME_LOAD, checkAPI.loadClassTime);
// 출석
const attendCheckInsertSaga = createRequestSaga(ATTEND_INSERT, checkAPI.insertCheck);
const attendCheckExitInsertSaga = createRequestSaga(ATTEND_EXIT_INSERT, checkAPI.insertCheckExit);

export function* checkSaga() {
    yield takeLatest(CLASS_LOAD, classListSaga);
    yield takeLatest(CLASS_TIME_LOAD, classTimeListSaga);
    yield takeLatest(ATTEND_INSERT, attendCheckInsertSaga);
    yield takeLatest(ATTEND_EXIT_INSERT, attendCheckExitInsertSaga);
}

const initState = {
    classTime : {},
    classList : [],
    result: '',
    classLoadError : null,
    classTimeLoadError : null,
    attendError : null,
}

export const check = handleActions(
    {
        [CLASS_LOAD_SUCCESS]: (state, {payload: classes})=>({
            ...state,
            classList: classes,
        }),
        [CLASS_LOAD_FAILURE]: (state, {payload: error})=>({
            ...state,
            classLoadError: error,
        }),
        [CLASS_TIME_LOAD_SUCCESS]: (state, {payload: classTime})=>({
            ...state,
            classTime: classTime,
        }),
        [CLASS_TIME_LOAD_FAILURE]: (state, {payload: error})=>({
            ...state,
            classTimeLoadError: error,
        }),
        [ATTEND_INSERT_SUCCESS]: (state, {payload: result})=>({
            ...state,
            result: result,
        }),
        [ATTEND_INSERT_DELETE]: (state, {payload: error})=>({
            ...state,
            attendError: error,
        }),
        [ATTEND_EXIT_INSERT_SUCCESS]: (state, {payload: result})=>({
            ...state,
            result: result,
        }),
        [ATTEND_EXIT_INSERT_DELETE]: (state, {payload: error})=>({
            ...state,
            attendError: error,
        }),
    },initState
)
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
const [ATTEND_INSERT, ATTEND_INSERT_SUCCESS, ATTEND_INSERT_FAILURE] = createRequestActionTypes('check/ATTEND_INSERT');
const [ATTEND_LEAVE_INSERT, ATTEND_LEAVE_INSERT_SUCCESS, ATTEND_LEAVE_INSERT_FAILURE] = createRequestActionTypes('check/ATTEND_LEAVE_INSERT');
const [ATTEND_EXIT_INSERT, ATTEND_EXIT_INSERT_SUCCESS, ATTEND_EXIT_INSERT_FAILURE] = createRequestActionTypes('check/ATTEND_EXIT_INSERT');
const [TODAY_ATTEND_LOAD, TODAY_ATTEND_LOAD_SUCCESS, TODAY_ATTEND_LOAD_FAILURE] = createRequestActionTypes('check/TODAY_ATTEND_INSERT');

// 장소 확인
const [CHECK_WIFI, CHECK_WIFI_SUCCESS, CHECK_WIFI_FAILURE] = createRequestActionTypes('check/CHECK_WIFI');
const RESET_CHECK_WIFI = 'check/RESET_CHECK_WIFI';
// Reducers
// 수업
export const loadClassList = createAction(CLASS_LOAD, u_phone=>u_phone);
export const loadClassTimeList = createAction(CLASS_TIME_LOAD, u_phone=>u_phone);

// 출석
export const loadCheck = createAction(ATTEND_LOAD, u_phone=>u_phone);
export const checkInsert = createAction(ATTEND_INSERT, u_phone=>u_phone);
export const checkLeaveInsert = createAction(ATTEND_LEAVE_INSERT, u_phone=>u_phone);
export const checkExitInsert = createAction(ATTEND_EXIT_INSERT, u_phone=>u_phone);
export const checkLoadTodayAttendList = createAction(TODAY_ATTEND_LOAD, (today)=>today);

// 장소 확인
export const checkWifi = createAction(CHECK_WIFI, (wifi_info) => wifi_info);
export const initCheckWifiInfo = createAction(RESET_CHECK_WIFI);

// saga 생성
// 수업
const classListSaga = createRequestSaga(CLASS_LOAD, checkAPI.loadClasses);
const classTimeListSaga = createRequestSaga(CLASS_TIME_LOAD, checkAPI.loadClassTime);
// 출석
const attendCheckInsertSaga = createRequestSaga(ATTEND_INSERT, checkAPI.insertCheck);
const attendCheckLeaveInsertSaga = createRequestSaga(ATTEND_LEAVE_INSERT, checkAPI.insertCheckReave);
const attendCheckExitInsertSaga = createRequestSaga(ATTEND_EXIT_INSERT, checkAPI.insertCheckExit);
const attendTodayCheckLoadSaga = createRequestSaga(TODAY_ATTEND_LOAD, checkAPI.loadTodayAttendList);

// 장소 확인
const checkWifiSaga = createRequestSaga(CHECK_WIFI, checkAPI.checkWifi);

export function* checkSaga() {
    yield takeLatest(CLASS_LOAD, classListSaga);
    yield takeLatest(CLASS_TIME_LOAD, classTimeListSaga);
    yield takeLatest(ATTEND_INSERT, attendCheckInsertSaga);
    yield takeLatest(ATTEND_LEAVE_INSERT, attendCheckLeaveInsertSaga);
    yield takeLatest(ATTEND_EXIT_INSERT, attendCheckExitInsertSaga);
    yield takeLatest(CHECK_WIFI, checkWifiSaga);
    yield takeLatest(TODAY_ATTEND_LOAD, attendTodayCheckLoadSaga);
}

const initState = {
    wifiInfo : {
        connect: '',
        ssid: '',
        ipAddress: '',
        bssid: '',
        u_phone: '',

    },
    classTime : {},
    classList : [],
    result: '',
    checkWifiInfo: '',
    todayAttendList : [],
    classLoadError : null,
    classTimeLoadError : null,
    attendError : null,
    checkWifiError : null,
    todayAttendListError : null,
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
        [ATTEND_INSERT_FAILURE]: (state, {payload: error})=>({
            ...state,
            attendError: error,
        }),
        [ATTEND_LEAVE_INSERT_SUCCESS]: (state, {payload: result})=>({
            ...state,
            result: result,
        }),
        [ATTEND_LEAVE_INSERT_FAILURE]: (state, {payload: error})=>({
            ...state,
            attendError: error,
        }),
        [ATTEND_EXIT_INSERT_SUCCESS]: (state, {payload: result})=>({
            ...state,
            result: result,
        }),
        [ATTEND_EXIT_INSERT_FAILURE]: (state, {payload: error})=>({
            ...state,
            attendError: error,
        }),
        [CHECK_WIFI_SUCCESS]: (state, {payload: wifiInfo})=>({
            ...state,
            checkWifiInfo: wifiInfo,
        }),
        [CHECK_WIFI_FAILURE]: (state, {payload: error})=>({
            ...state,
            checkWifiError: error,
        }),
        [TODAY_ATTEND_LOAD_SUCCESS]: (state, {payload: today})=>({
            ...state,
            todayAttendList: today,
        }),
        [TODAY_ATTEND_LOAD_FAILURE]: (state, {payload: error})=>({
            ...state,
            todayAttendListError: error,
        }),
        [RESET_CHECK_WIFI]: (state)=> ({
            ...state,
            checkWifiInfo: '',
        })
    },initState
)
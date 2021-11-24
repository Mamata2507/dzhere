import { createAction, handleActions } from "redux-actions";
// import produce from "immer";
// import { takeLatest } from "redux-saga/effects";
// import createRequestSaga, {
//   createRequestActionTypes,
// } from "../lib/createRequestSaga";
// import * as authAPI from "../lib/api/auth";

// const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';
const GET_WIFI = "external/GET_WIFI";
const GET_LOC = "external/GET_LOC";
const SET_EXTERNAL = "external/SET_EXTERNAL";
const initialState = {
  wifi: {
    ssid: "",
    bssid: "",
    location: "",
  },
};

// export const initializeForm = createAction(INITIALIZE_FORM, form => form); // register / login

export const getWifi = createAction(GET_WIFI, (data) => data);

export const getLoc = createAction(GET_LOC, (data) => data);

export const setExternal = createAction(SET_EXTERNAL, (wifi) => wifi);

// // saga 생성
// const externalSaga = createRequestSaga(EXTERNAL, authAPI.login);
// export function* authSaga() {
//   yield takeLatest(EXTERNAL, externalSaga);
// }

export const external = handleActions(
  {
    // [GET_WIFI]: (state, { payload: data }) => ({
    //   ...state,
    //   ssid: data.ssid,
    //   bssid: data.bssid,
    // }),
    // [GET_LOC]: (state, { payload: data }) => ({
    //   ...state,
    //   location: data.location,
    // }),
    [SET_EXTERNAL]: (state, { payload: wifi }) => ({
      wifi,
    }),
  },
  initialState
);


// 로그인 성공
//     [LOGIN_SUCCESS]: (state, { payload: external }) => ({
//       ...state,
//       error: null,
//       pass,
//     }),
//     // 로그인 실패
//     [LOGIN_FAILURE]: (state, { payload: error }) => ({
//       ...state,
//       error: error,
//     }),
//   },

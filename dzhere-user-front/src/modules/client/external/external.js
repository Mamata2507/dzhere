import { createAction, handleActions } from "redux-actions";
// import produce from "immer";
// import { takeLatest } from "redux-saga/effects";
// import createRequestSaga, {
//   createRequestActionTypes,
// } from "../lib/createRequestSaga";
// import * as authAPI from "../lib/api/auth";

// const CHANGE_FIELD = "external/CHANGE_FIELD";
// const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';
// const GET_WIFI = "external/GET_WIFI";
// const GET_LOC = "external/GET_LOC";
const SET_EXTERNAL = "external/SET_EXTERNAL";
// const SET_LIST = "external/SET_LIST"
const initialState = {
  wifi: {
    ssid: '',
    bssid: '',
  },
  location: '',
};

// const EXTERNAL = createRequestActionTypes("external/EXTERNAL");

// export const initializeForm = createAction(INITIALIZE_FORM, form => form); // register / login
// export const getWifi = createAction(GET_WIFI, ({ wifi }) => ({
//   wifi,
// }));

// export const getLoc = createAction(GET_LOC, ({ location }) => ({
//   location,
// }));

export const setExternal = createAction(SET_EXTERNAL,({wifi, location}) => ({
  wifi,
  location,
}))

// export const setList = createAction(SET_LIST, ({externalInfo})=>({
//   externalInfo
// }))

// // saga 생성
// const externalSaga = createRequestSaga(EXTERNAL, authAPI.login);
// export function* authSaga() {
//   yield takeLatest(EXTERNAL, externalSaga);
// }

export const external = handleActions(
  {

    // [GET_WIFI]: (state, { payload: wifi }) => ({
    //   ...state,
    //   wifi,
    // }),
    // [GET_LOC]: (state, { payload: location }) => ({
    //   ...state,
    //   location
    // }),
    [SET_EXTERNAL]: (state, { payload: {wifi, location}}) => ({
      ...state,
      wifi,
      location,
    }),
    // [SET_LIST]: (state, { payload: {externalInfo}}) => ({
    //   ...state,
    //   externalInfo,
    // })
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

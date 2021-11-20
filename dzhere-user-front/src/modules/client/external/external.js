import { createAction, handleActions } from "redux-actions";
// import produce from "immer";
// import { takeLatest } from "redux-saga/effects";
// import createRequestSaga, {
//   createRequestActionTypes,
// } from "../lib/createRequestSaga";
// import * as authAPI from "../lib/api/auth";
const ADD_WIFI = "external/ADD_WIFI";
const GET_EXTERNAL = "external/GET_EXTERNAL";
const SAVE_PHONE = "external/SAVE_PHONE";
const DEL_EXTERNAL = "external/DEL_EXTERNAL";
const initialState = {
  wifi: {
    ssid: "",
    bssid: "",
    location: "",
  },
  loclist: [],
  id: 0,
};

// export const initializeForm = createAction(INITIALIZE_FORM, form => form); // register / login
export const setWifi = createAction(ADD_WIFI, wifi => wifi);
export const getList = createAction(GET_EXTERNAL, loclist => loclist);
export const deleteWifi = createAction(DEL_EXTERNAL, id => id);
export const savePhone = createAction(SAVE_PHONE, u_phone => u_phone)
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

    [ADD_WIFI]: (state, { payload: wifi }) => ({
      ...state,
      wifi,
    }),
    [GET_EXTERNAL]: (state, { payload: loclist }) => ({
      ...state,
      loclist: loclist,
    }),
    [SAVE_PHONE]: (state, {payload: u_phone}) => ({
      ...state,
      u_phone,
    }),
    [DEL_EXTERNAL]: (state, {payload: id}) => ({
      ...state,
      id,
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

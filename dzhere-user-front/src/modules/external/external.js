import { createAction, handleActions } from "redux-actions";

const ADD_WIFI = "external/ADD_WIFI";
const GET_EXTERNAL = "external/GET_EXTERNAL";
const DEL_EXTERNAL = "external/DEL_EXTERNAL";

export const setWifi = createAction(ADD_WIFI, (wifi) => wifi);
export const getList = createAction(GET_EXTERNAL, (loclist) => loclist);
export const deleteWifi = createAction(DEL_EXTERNAL, (id) => id);

const initialState = {
  wifi: {
    ssid: "",
    bssid: "",
    location: "",
  },
  loclist: [],
  id: 0,
};

export const external = handleActions(
  {
    [ADD_WIFI]: (state, { payload: wifi }) => ({
      ...state,
      wifi,
    }),
    [GET_EXTERNAL]: (state, { payload: loclist }) => ({
      ...state,
      loclist,
    }),
    [DEL_EXTERNAL]: (state, { payload: id }) => ({
      ...state,
      id,
    }),
  },
  initialState
);

export default external;

import { createAction, handleActions } from "redux-actions";

const READ_MYINFO = "myinfo/READ_MYINFO";

const initialState = {
  userInfo: {
    userEmail: "",
    userPhone: "",
    //bssid: "",
  },
};

export const read_myInfo = createAction(READ_MYINFO, (userInfo) => userInfo);

export const myinfo = handleActions(
  {
    [READ_MYINFO]: (state, { payload: userInfo }) => ({
      ...state,
      userInfo,
    }),
  },
  initialState
);


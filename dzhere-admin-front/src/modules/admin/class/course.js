import { createAction, handleActions } from "redux-actions";

const GET_CLASS = "class/GET_CLASS";
const GET_CLASSTIME = "class/GET_CLASSTIME";
const GET_STUDENT = "class/GET_STUDENT";
const SET_CLASSID = "class/SET_CLASSID";
const SET_AGENCY = "agency/SET_AGENCY";
const SET_CHECK = "class/SET_CHECK";
const SET_VALUE = "class/SET_VALUE";
const GET_CLASSLOCATION = "class/GET_CLASSLOCATION";

const initialState = {
  stlist: [],
  clist: [],
  ctlist: [],
  agency: {
    u_idx: 0,
    u_phone: "",
    u_pw: "",
    u_email: "",
    u_alarm: 0, // tinyint
    u_name: "",
    u_accept: 1, // tinyint
    u_auth: 0,
    c_idx: 0,
    ag_idx: 0,
    ag_name: "",
  },
  classid: 0,
  checkid: false,
  itemId: {
    c_idx: 0,
    c_name: "",
    ag_idx: 0,
  },
  loclist: [],
};

export const getClass = createAction(GET_CLASS, (clist) => clist);
export const getClasstime = createAction(GET_CLASSTIME, (ctlist) => ctlist);
export const getStudent = createAction(GET_STUDENT, (stlist) => stlist);
export const setAgency = createAction(SET_AGENCY, (agency) => agency);
export const setClassId = createAction(SET_CLASSID, (itemId) => itemId);
export const setCheck = createAction(SET_CHECK, (checkid) => checkid);
export const setValue = createAction(SET_VALUE, (classid) => classid);
export const getClasslocation = createAction(
  GET_CLASSLOCATION,
  (loclist) => loclist
);

const classes = handleActions(
  {
    [GET_CLASS]: (state, { payload: clist }) => ({
      ...state,
      clist,
    }),
    [GET_CLASSTIME]: (state, { payload: ctlist }) => ({
      ...state,
      ctlist,
    }),
    [GET_CLASSLOCATION]: (state, { payload: loclist }) => ({
      ...state,
      loclist,
    }),
    [GET_STUDENT]: (state, { payload: stlist }) => ({
      ...state,
      stlist,
    }),
    [SET_AGENCY]: (state, { payload: agency }) => ({
      ...state,
      agency,
    }),
    [SET_CLASSID]: (state, { payload: itemId }) => ({
      ...state,
      itemId,
    }),
    [SET_CHECK]: (state, { payload: checkid }) => ({
      ...state,
      checkid,
    }),
    [SET_VALUE]: (state, { payload: classid }) => ({
      ...state,
      classid,
    }),
  },
  initialState
);

export default classes;

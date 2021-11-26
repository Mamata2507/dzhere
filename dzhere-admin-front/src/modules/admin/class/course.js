import { createAction, handleActions } from "redux-actions";

const GET_CLASS = "class/GET_CLASS";
const GET_CLASSTIME = "class/GET_CLASSTIME";
const GET_STUDENT = "class/GET_STUDENT";
const SET_CLASSID = "class/SET_CLASSID";
const SET_AGENCY = "agency/SET_AGENCY";
const SET_CHECK = "class/SET_CHECK";
const SET_VALUE = "class/SET_VALUE";
const GET_CLASSLOCATION = "class/GET_CLASSLOCATION";
const SELECT_CLASS = "class/SELECT_CLASS";
const SELECT_EXTERNAL = "class/SELECT_EXTERNAL";

const initialState = {
  stlist: [],
  clist: [],
  ctlist: [],
  agency: {
    u_idx: 0,
    u_name: "",
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
  externalist: [],
  selectClass: 0,
  selectStudent: '',
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
export const setSelectClass = createAction(SELECT_CLASS, (selectClass) => selectClass);
export const setExternal = createAction(SELECT_EXTERNAL, (externalist) => externalist);

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
    [SELECT_CLASS]: (state, { payload: selectClass }) => ({
      ...state,
      selectClass,
    }),
    [SELECT_EXTERNAL]: (state, { payload: externalist }) => ({
      ...state,
      externalist,
    }),
  },
  initialState
);

export default classes;

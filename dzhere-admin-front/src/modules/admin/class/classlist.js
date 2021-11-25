import { createAction, handleActions } from "redux-actions";

const GET_CLASS = "class/GET_CLASS";
const GET_STUDENT = "class/GET_STUDENT";
const SET_CLASSID = "class/SET_CLASSID";
const SET_AGENCY = "agency/SET_AGENCY";
const initialState = {
  stlist: [],
  clist: [],
  agency: {
    ag_idx: 0,
    ag_name: "",
  },
  itemId: {
    c_idx: 0,
    c_name: "",
    ag_idx:0
  },
};

export const getClass = createAction(GET_CLASS, (clist) => clist);
export const getStudent = createAction(GET_STUDENT, (stlist) => stlist);
export const setAgency = createAction(SET_AGENCY, (agency) => agency);
export const setClassId = createAction(SET_CLASSID, (itemId) => itemId);

const classes = handleActions(
  {
    [GET_CLASS]: (state, { payload: clist }) => ({
      ...state,
      clist,
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
  },
  initialState
);

export default classes;

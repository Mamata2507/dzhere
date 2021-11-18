import { createAction, handleActions } from 'redux-actions';
// Actions
const CHECK_LOAD = 'check/CHECK_LOAD';
const CHECK_INSERT = 'check/CHECK_INSERT';
// Reducers
export const loadCheck = createAction(CHECK_LOAD, id => id);
export const insertCheck = createAction(CHECK_INSERT);

const initState = {
    state: 0,
    checkStart : false,
    checkStartTime : '',
    checkEnd : false,
    checkEndTime : '',
}

export default check = handleActions(
    {
        [CHECK_LOAD]: (state, action) => ({

        }),
        [CHECK_INSERT]: (state, {payload:data})=>({
            id: action.id,
            time: data.time
        }),
    },initState
)
import {
    UPDATE_SIDE_OBJECTIVE_SELECT,
    UPDATE_SIDE_OBJECTIVE_CHECKBOX,
    RESET_SIDE_OBJECTIVES
} from '../actionTypes';

const initialState = {
    list: [
        { id: 1, objective: null, checked: false },
        { id: 2, objective: null, checked: false },
        { id: 3, objective: null, checked: false }
    ]
};

export default (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_SIDE_OBJECTIVE_SELECT: {
            let sideObjective = state.list.filter(el => el.id === action.payload.id)[0];
            let index = action.payload.id - 1 >= 0 ? action.payload.id - 1 : 0;
            sideObjective.objective = action.payload.objective;
            state.list.splice(index, 1, sideObjective);
            return state;
        }
        case UPDATE_SIDE_OBJECTIVE_CHECKBOX: {
            let sideObjective = state.list.filter(el => el.id === action.payload.id)[0];
            sideObjective.checked = action.payload.checked;
            let index = action.payload.id - 1 >= 0 ? action.payload.id - 1 : 0;
            state.list.splice(index, 1, sideObjective);
            return state;
        }
        case RESET_SIDE_OBJECTIVES: {
           state.list = [
                { id: 1, objective: null, checked: false },
                { id: 2, objective: null, checked: false },
                { id: 3, objective: null, checked: false }
            ];
            return state;
        }
        default:
            return state;
    }
};
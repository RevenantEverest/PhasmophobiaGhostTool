import {
    ADD_GHOST_NAME,
    REMOVE_GHOST_NAME,
    ISEVERYONE,
    ISALONE,
    RESET_NOTES
} from '../actionTypes';

const initialState = {
    isEveryone: false,
    isAlone: false,
    ghostName: ""
};

export default (state = initialState, action) => {
    switch(action.type) {
        case ADD_GHOST_NAME:
            state.ghostName = action.payload;
            return state;
        case REMOVE_GHOST_NAME:
            state.ghostName = "";
            return state;
        case ISEVERYONE:
            state.isEveryone = true;
            state.isAlone = false;
            return state;
        case ISALONE: 
            state.isEveryone = false;
            state.isAlone = true;
            return state;
        case RESET_NOTES:
            state = {
                isEveryone: false,
                isAlone: false,
                ghostName: ""
            };
            return state;
        default:
            return state;
    }
};
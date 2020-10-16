import {
    ADD_EVIDENCE,
    REMOVE_EVIDENCE,
    ELIMINATE_EVIDENCE,
    REMOVE_ELIMINATED_EVIDENCE,
    RESET_EVIDENCE
} from '../actionTypes';

const initialState = {
    collectedEvidence: [],
    eliminatedEvidence: []
};

export default (state = initialState, action) => {
    switch(action.type) {
        case ADD_EVIDENCE:
            state.collectedEvidence.push(action.payload);
            return state;
        case REMOVE_EVIDENCE:
            state.collectedEvidence.splice(state.collectedEvidence.indexOf(action.payload), 1);
            return state;
        case ELIMINATE_EVIDENCE:
            state.eliminatedEvidence.push(action.payload);
            return state;
        case REMOVE_ELIMINATED_EVIDENCE:
            state.eliminatedEvidence.splice(state.eliminatedEvidence.indexOf(action.payload), 1);
            return state;
        case RESET_EVIDENCE:
            state = {
                collectedEvidence: [],
                eliminatedEvidence: []
            };
            return state;
        default:
            return state;
    }
};
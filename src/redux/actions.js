import {
    ADD_EVIDENCE,
    REMOVE_EVIDENCE,
    ELIMINATE_EVIDENCE,
    REMOVE_ELIMINATED_EVIDENCE,
    ADD_GHOST_NAME,
    REMOVE_GHOST_NAME,
    ISEVERYONE,
    ISALONE,
    UPDATE_SIDE_OBJECTIVE_SELECT,
    UPDATE_SIDE_OBJECTIVE_CHECKBOX,
    RESET_EVIDENCE,
    RESET_NOTES,
    RESET_SIDE_OBJECTIVES
} from './actionTypes';

export const addEvidence = content => ({
    type: ADD_EVIDENCE,
    payload: content
});

export const removeEvidence = content => ({
    type: REMOVE_EVIDENCE,
    payload: content
});

export const eliminateEvidence = content => ({
    type: ELIMINATE_EVIDENCE,
    payload: content
});

export const removeEliminatedEvidence = content => ({
    type: REMOVE_ELIMINATED_EVIDENCE,
    payload: content
});

export const resetEvidence = () => ({
    type: RESET_EVIDENCE
});

/* Notes */

export const addGhostName = content => ({
    type: ADD_GHOST_NAME,
    payload: content
});

export const removeGhostName = () => ({
    type: REMOVE_GHOST_NAME
});

export const updateIsEveryone = () => ({
    type: ISEVERYONE
});

export const updateIsAlone = () => ({
    type: ISALONE
});

export const resetNotes = () => ({
    type: RESET_NOTES
});

/* SIde Objectives */

export const updateSideObjectiveSelect = content => ({
    type: UPDATE_SIDE_OBJECTIVE_SELECT,
    payload: content
});

export const updateSideObjectiveCheckbox = content => ({
    type: UPDATE_SIDE_OBJECTIVE_CHECKBOX,
    payload: content
});

export const resetSideObjectives = () => ({
    type: RESET_SIDE_OBJECTIVES
});
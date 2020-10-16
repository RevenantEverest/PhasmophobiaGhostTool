import evidenceReducer from './evidence';
import notes from './notes';
import sideObjectives from './sideObjectives';

import { combineReducers } from 'redux';

const reducers = combineReducers({
    evidence: evidenceReducer,
    notes: notes,
    sideObjectives: sideObjectives
});

export default reducers;
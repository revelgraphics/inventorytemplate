import { combineReducers } from 'redux';
import domainReducer from './domainDataReducer';
import appReducer from './appStateReducer';
import uiReducer from './uiStateReducer';

const rootReducer = combineReducers({
    domainData: domainReducer,
    appState: appReducer,
    uiState: uiReducer,
});

export default rootReducer;
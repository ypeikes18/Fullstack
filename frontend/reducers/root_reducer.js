import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducer.js';
import sessionReducer from './session_reducer.js';
import errorsReducer from './errors_reducer';
import uiReducer from './ui_reducer';


const rootReducer = combineReducers({
    session: sessionReducer,
    entities: entitiesReducer,
    errors: errorsReducer,
    ui: uiReducer
})

export default rootReducer;


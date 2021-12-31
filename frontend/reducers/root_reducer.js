import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducer.js';
import sessionReducer from './session_reducer.js'

const rootReducer = combineReducers({
    session: sessionReducer,
    entitites: entitiesReducer
})

export default rootReducer;


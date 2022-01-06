import { combineReducers } from 'redux';

import sessionErrorsReducer from './session_errors_reducer';
import blogErrorsReducer from './blog_errors_reducer';


export default combineReducers({
    session: sessionErrorsReducer,
    blog: blogErrorsReducer
})


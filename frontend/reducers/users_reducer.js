import { RECEIVE_USER } from '../actions/user_actions'
import { RECEIVE_CURRENT_USER } from '../actions/session_actions'

const usersReducer = (prevState = {}, action) => {
    Object.freeze(prevState);
    const newstate = Object.assign({}, prevState)

    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            newstate[action.user.id] = action.user;
            return newstate;
        case RECEIVE_USER:
            newstate[action.user.id] = action.user;
            return newstate;      
        default: 
            return prevState    
    }
}

export default usersReducer;
import { LOGOUT_CURRENT_USER, 
         RECEIVE_CURRENT_USER } 
         from '../actions/session_actions.js'

const _nullUser = { currentUserId: null }

const sessionReducer = (prevState = _nullUser, action) => {
    Object.freeze(prevState);
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return { currentUserId: action.user.id }
        case LOGOUT_CURRENT_USER:
            return _nullUser
        default:
            return prevState; 
    }
}

export default sessionReducer;




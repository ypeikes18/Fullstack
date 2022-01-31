import { RECEIVE_SELECTED_COMMENT, 
        REMOVE_SELECTED_COMMENT } from '../actions/ui_actions.js'

const _nullState = { selectedComment: null }

const uiReducer = (prevState = _nullState, action) => {
    Object.freeze(prevState);
    switch(action.type) {
    case RECEIVE_SELECTED_COMMENT:
        return { selectedComment: action.commentId }
    case REMOVE_SELECTED_COMMENT:
        return _nullState
    default:
        return prevState; 
    }
}

export default uiReducer;
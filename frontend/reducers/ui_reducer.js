import { RECEIVE_EDIT_COMMENT, 
        REMOVE_EDIT_COMMENT } from '../actions/ui_actions.js'

const _nullState = { editComment: null }

const uiReducer = (prevState = _nullState, action) => {
    Object.freeze(prevState);
    switch(action.type) {
    case RECEIVE_EDIT_COMMENT:
        return { editComment: action.commentId }
    case REMOVE_EDIT_COMMENT:
        return _nullState
    default:
        return prevState; 
    }
}

export default uiReducer;
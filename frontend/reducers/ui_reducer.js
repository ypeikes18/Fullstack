import { RECEIVE_SELECTED_COMMENT, 
        REMOVE_SELECTED_COMMENT,
        RECEIVE_REPLY_FORM_ID,
        REMOVE_REPLY_FORM_ID } from '../actions/ui_actions.js'

const _nullState = { 
    selectedComment: null,
    replyFormId: null
}

const uiReducer = (prevState = _nullState, action) => {
    Object.freeze(prevState);
    const newState = Object.assign({}, prevState)

    switch(action.type) {
    case RECEIVE_SELECTED_COMMENT:
        newState.selectedComment = action.commentId;
        return newState; 
    case REMOVE_SELECTED_COMMENT:
        return _nullState;
    case RECEIVE_REPLY_FORM_ID:
        newState.replyFormId = action.commentId;
        return newState;
    case REMOVE_REPLY_FORM_ID:
        return _nullState;
    default:
        return prevState; 
    }
}

export default uiReducer;
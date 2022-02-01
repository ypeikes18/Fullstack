export const RECEIVE_SELECTED_COMMENT = 'RECEIVE_SELECTED_COMMENT';
export const REMOVE_SELECTED_COMMENT = 'REMOVE_SELECTED_COMMENT';
export const RECEIVE_REPLY_FORM_ID = 'RECEIVE_REPLY_FORM_ID';
export const REMOVE_REPLY_FORM_ID = 'REMOVE_REPLY_FORM_ID';

const receiveSelection = commentId => ({
    type: RECEIVE_SELECTED_COMMENT,
    commentId
});

const removeSelection = () => ({
    type: REMOVE_SELECTED_COMMENT
});

const receiveReply = commentId => ({
    type: RECEIVE_REPLY_FORM_ID,
    commentId
});

const removeReply = () => ({
    type: REMOVE_REPLY_FORM_ID
});


export const receiveSelectedComment = commentId => dispatch => {
    return dispatch(receiveSelection(commentId))
};

export const removeSelectedComment = () => dispatch => {
    return dispatch(removeSelection())
};

export const receiveReplyFormId = commentId => dispatch => {
    return dispatch(receiveReply(commentId))
};

export const removeReplyFormId = () => dispatch => {
    return dispatch(removeReply())
};
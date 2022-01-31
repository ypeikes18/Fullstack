export const RECEIVE_SELECTED_COMMENT = 'RECEIVE_SELECTED_COMMENT';
export const REMOVE_SELECTED_COMMENT = 'REMOVE_SELECTED_COMMENT';
export const RECEIVE_REPLY_FORM = 'RECEIVE_REPLY_FORM';
export const REMOVE_REPLY_FORM = 'REMOVE_REPLY_FORM';

const receiveSelection = commentId => ({
    type: RECEIVE_SELECTED_COMMENT,
    commentId
});

const removeSelection = () => ({
    type: REMOVE_SELECTED_COMMENT
});

const receiveReply = () => ({
    type: RECEIVE_REPLY_FORM,
});

const removeReply = () => ({
    type: REMOVE_REPLY_FORM
});


export const receiveSelectedComment = commentId => dispatch => {
    return dispatch(receiveSelection(commentId))
};

export const removeSelectedComment = () => dispatch => {
    return dispatch(removeSelection())
};

export const receiveReplyForm = () => dispatch => {
    return dispatch(receiveReply())
};

export const removeReplyForm = () => dispatch => {
    return dispatch(removeReply())
};
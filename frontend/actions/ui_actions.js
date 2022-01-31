export const RECEIVE_SELECTED_COMMENT = 'RECEIVE_SELECTED_COMMENT';
export const REMOVE_SELECTED_COMMENT = 'REMOVE_SELECTED_COMMENT';

const receiveSelection = commentId => ({
    type: RECEIVE_SELECTED_COMMENT,
    commentId
});

const removeSelection = () => ({
    type: REMOVE_SELECTED_COMMENT
});

export const receiveSelectedComment = commentId => dispatch => {
    return dispatch(receiveSelection(commentId))
};

export const removeSelectedComment = () => dispatch => {
    return dispatch(removeSelection())
};
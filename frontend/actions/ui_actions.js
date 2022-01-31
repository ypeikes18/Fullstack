export const RECEIVE_SELECTED_COMMENT = 'RECEIVE_EDIT_COMMENT';
export const REMOVE_SELECTED_COMMENT = 'REMOVE_EDIT_COMMENT';

const receiveEdit = commentId => ({
    type: RECEIVE_SELECTED_COMMENT,
    commentId
});

const removeEdit = () => ({
    type: REMOVE_SELECTED_COMMENT
});

export const receiveSelectedComment = commentId => dispatch => {
    return dispatch(receiveEdit(commentId))
};

export const removeSelectedComment = () => dispatch => {
    return dispatch(removeEdit())
};
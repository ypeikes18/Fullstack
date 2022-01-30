export const RECEIVE_EDIT_COMMENT = 'RECEIVE_EDIT_COMMENT';
export const REMOVE_EDIT_COMMENT = 'REMOVE_EDIT_COMMENT';

const receiveEdit = commentId => ({
    type: RECEIVE_EDIT_COMMENT,
    commentId
});

const removeEdit = () => ({
    type: REMOVE_EDIT_COMMENT
});

export const receiveEditComment = commentId => dispatch => {
    return dispatch(receiveEdit(commentId))
};

export const removeEditComment = () => dispatch => {
    return dispatch(removeEdit())
};
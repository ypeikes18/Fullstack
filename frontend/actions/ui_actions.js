export const RECEIVE_EDIT_COMMENT = 'RECEIVE_EDIT_COMMENT';
export const REMOVE_EDIT_COMMENT = 'REMOVE_EDIT_COMMENT';

const receiveEdit = commentId => ({
    type: RECEIVE_EDIT_COMMENT,
    commentId
});

const removeEdit = commentId => ({
    type: REMOVE_EDIT_COMMENT,
    commentId
});

export const receiveEditComment = commentId => dispatch => {
    dispatch(receiveEdit(commentId))
};

export const removeEditComment = commentId => dispatch => (
    dispatch(removeEdit(commentId))
);
import * as CommentApiUtil from '../util/comment_api_util';

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS';

const receiveComments = comments => ({
    type: RECEIVE_COMMENTS,
    comments
})

export const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment
})

const removeComment = commentId => ({
    type: REMOVE_COMMENT,
    commentId
})

const receiveErrors = errors => {
    return {
        type: RECEIVE_COMMENT_ERRORS,
        errors
    }
}


export const fetchComment = commentId => dispatch => {
    return CommentApiUtil.fetchComment(commentId)
    .then(comment => dispatch(receiveComment(comment)),
    errors => dispatch(receiveErrors(errors.responseJSON)))
}

export const deleteComment = commentId => dispatch => (
    CommentApiUtil.deleteComment(commentId)
    .then(comment => dispatch(removeComment(comment.id)),
    errors => dispatch(receiveErrors(errors.responseJSON)))
)

export const updateComment = comment => dispatch => (
    CommentApiUtil.updateComment(comment)
    .then(comment => dispatch(receiveComment(comment)),
    errors => dispatch(receiveErrors(errors.responseJSON)))
)

export const createComment = comment => dispatch => {

    return CommentApiUtil.createComment(comment)
    .then(comment => dispatch(receiveComment(comment)),
    errors => dispatch(receiveErrors(errors.responseJSON)))
}
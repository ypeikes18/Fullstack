import { connect } from 'react-redux';

import Comment from './comment';
import { fetchComment, 
         deleteComment, 
         updateComment } from '../../actions/comment_actions'

const mSTP = (state, ownProps) => {
    const commentId = ownProps.comment.id;
    const currentUserId = state.session.currentUserId;
    const comment = ownProps.comment;

    const childComments = (
        Object.values(
            state.entities.comments
        )
        .filter(comment => (
            comment.parent_comment_id === commentId
            )
        )
    )
    return {
        comment,
        isCommenter: currentUserId === (comment ? comment.commenter_id : false),
        childComments
    }
}

const mDTP = dispatch => {
    return {
        fetchComment: commentId => dispatch(fetchComment(commentId)),
        deleteComment: commentId => dispatch(deleteComment(commentId)),
        updateComment: comment => dispatch(updateComment(comment))
    }
}

export default connect(mSTP, mDTP)(Comment);
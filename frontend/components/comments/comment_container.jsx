import { connect } from 'react-redux';

import Comment from './comment';
import { fetchComment, 
         deleteComment, 
         updateComment } from '../../actions/comment_actions'

const mSTP = (state, ownProps) => {
    const commentId = ownProps.commentId;
    const currentUserId = state.session.currentUserId;
    const comment = state.entities.comments[commentId];
    return {
        comment,
        isCommenter: currentUserId === (comment ? comment.commenter_id : false)
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
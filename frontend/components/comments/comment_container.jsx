import { connect } from 'react-redux';

import Comment from './comment';
import { receiveEditComment } from '../../actions/ui_actions'
import { fetchComment, 
         deleteComment, 
         updateComment } from '../../actions/comment_actions';


const mSTP = (state, ownProps) => {
    const currentUserId = state.session.currentUserId;
    const comment = ownProps.comment;
    const commentId = comment.id;

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
        childComments,
        editComment: state.ui.editComment
    }
}

const mDTP = dispatch => {
    return {
        fetchComment: commentId => dispatch(fetchComment(commentId)),
        deleteComment: commentId => dispatch(deleteComment(commentId)),
        updateComment: comment => dispatch(updateComment(comment)),
        receiveEditComment: commentId => dispatch(receiveEditComment(commentId))
    }
}

export default connect(mSTP, mDTP)(Comment);
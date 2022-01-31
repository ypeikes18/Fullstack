import { connect } from 'react-redux';

import Comment from './comment';
import { receiveSelectedComment,
         removeSelectedComment,
         removeReplyForm,
         receiveReplyForm } from '../../actions/ui_actions';
import { fetchComment, 
         deleteComment, 
         updateComment } from '../../actions/comment_actions';


const mSTP = (state, ownProps) => {
    const currentUserId = state.session.currentUserId;
    const comment = ownProps.comment;
    const commentId = comment.id;
    const { selectedComment, replyForm } = state.ui;

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
        selectedComment,
        replyForm
    }
}

const mDTP = dispatch => {
    return {
        fetchComment: commentId => dispatch(fetchComment(commentId)),
        deleteComment: commentId => dispatch(deleteComment(commentId)),
        updateComment: comment => dispatch(updateComment(comment)),
        receiveSelectedComment: commentId => dispatch(receiveSelectedComment(commentId)),
        receiveReplyForm: () => dispatch(receiveReplyForm()),
        removeReplyForm: () => dispatch(removeReplyForm())
    }
}

export default connect(mSTP, mDTP)(Comment);
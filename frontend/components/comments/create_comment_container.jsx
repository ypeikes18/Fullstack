import { connect } from 'react-redux';

import CommentForm from './comment_form';
import { createComment, fetchComment } from '../../actions/comment_actions';
import { removeSelectedComment,
    receiveReplyFormId,
    removeReplyFormId } from '../../actions/ui_actions';

const mSTP = (state, ownProps) => {
    const parentCommentId = ownProps.parentCommentId;
    const postId = (parentCommentId ? (
        state.entities.comments[parentCommentId]['post_id']) : (ownProps.postId));
        
    return {
        comment: {
            commenter_id: state.session.currentUserId,
            parent_comment_id: (parentCommentId ? parentCommentId : ''),
            post_id: postId,
            body: ''
        },
        type: 'create'
    }
}

const mDTP = dispatch => {
    return {
        action: comment => dispatch(createComment(comment)),
        fetchComment: commentId => dispatch(fetchComment(commentId)),
        removeSelectedComment: commentId => dispatch(removeSelectedComment(commentId)),
        receiveReplyFormId: commentId => dispatch(receiveReplyFormId(commentId)),
        removeReplyFormId: () => dispatch(removeReplyFormId())
    }
}

export default connect(mSTP, mDTP)(CommentForm);
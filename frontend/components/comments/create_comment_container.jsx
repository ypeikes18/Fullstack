import { connect } from 'react-redux';

import CommentForm from './comment_form';
import { createComment } from '../../actions/comment_actions'

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
        action: comment => dispatch(createComment(comment))
    }
}

export default connect(mSTP, mDTP)(CommentForm);
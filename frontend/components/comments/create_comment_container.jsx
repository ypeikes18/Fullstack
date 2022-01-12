import { connect } from 'react-redux';

import CommentForm from './comment_form';
import { createComment } from '../../actions/comment_actions'

const mSTP = (state, ownProps) => {
    const parentCommentId = ownProps.parentCommentId;
    return {
        comment: {
            commenter_id: state.session.currentUserId,
            parent_comment_id: ownProps.parentCommentId,
            post_id: state.entities.comments[parentCommentId]['post_id'],
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
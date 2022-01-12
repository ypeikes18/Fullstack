import { connect } from 'react-redux';

import CommentForm from './comment_form';
import { fetchComment, 
         updateComment } from '../../actions/comment_actions'

const mSTP = (state, ownProps) => {
    return {
        comment: state.entities.comments[ownProps.commentId]
    }
}

const mDTP = dispatch => {
    return {
        fetchComment: commentId => dispatch(fetchComment(commentId)),
        action: comment => dispatch(updateComment(comment))
    }
}

export default connect(mSTP, mDTP)(CommentForm);
import { connect } from 'react-redux';

import Comment from './comment';
import { fetchComment } from '../../actions/comment_actions'

const mSTP = (state, ownProps) => {
    return {
        comment: state.entities.comments[ownProps.commentId]
    }
}

const mDTP = dispatch => {
    return {
        fetchComment: commentId => dispatch(fetchComment(commentId))
    }
}

export default connect(mSTP, mDTP)(Comment);
import { connect } from 'react-redux';

import CommentForm from './comment_form';
import { removeEditComment } from '../../actions/ui_actions';
import { fetchComment, 
         updateComment } from '../../actions/comment_actions'

const mSTP = (state, ownProps) => {
    const editComment = state.ui.editComment;
    return {
        comment: state.entities.comments[editComment],
        editComment,
        type: 'edit'        
    }
}

const mDTP = dispatch => {

    return {
        fetchComment: commentId => dispatch(fetchComment(commentId)),
        action: comment => dispatch(updateComment(comment)),
        removeEditComment: () => dispatch(removeEditComment())
    }
}

export default connect(mSTP, mDTP)(CommentForm);
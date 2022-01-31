import { connect } from 'react-redux';

import CommentForm from './comment_form';
import { removeSelectedComment } from '../../actions/ui_actions';
import { fetchComment, 
         updateComment } from '../../actions/comment_actions'

const mSTP = (state) => {
    const selectedComment = state.ui.selectedComment;
    return {
        comment: state.entities.comments[selectedComment],
        selectedComment,
        type: 'edit'        
    }
}

const mDTP = dispatch => {

    return {
        fetchComment: commentId => dispatch(fetchComment(commentId)),
        action: comment => dispatch(updateComment(comment)),
        removeSelectedComment: () => dispatch(removeSelectedComment())
    }
}

export default connect(mSTP, mDTP)(CommentForm);
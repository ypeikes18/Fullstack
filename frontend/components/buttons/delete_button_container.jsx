import { connect } from 'react-redux';

import DeleteButton from './delete_button';
import { deleteComment } from '../../actions/comment_actions';
import { deletePost } from '../../actions/post_actions';
import { deleteBlog } from '../../actions/blog_actions';

const mDTP = dispatch => {
    return {
        deleteComment: id => dispatch(deleteComment(id)),
        deletePost: id => dispatch(deletePost(id)),
        deleteBlog: id => dispatch(deleteBlog(id))
    }
}

export default connect(null,mDTP)(DeleteButton);